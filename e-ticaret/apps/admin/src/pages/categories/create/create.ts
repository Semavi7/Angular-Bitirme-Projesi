import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, resource, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Blank from 'apps/admin/src/components/blank/blank';
import { CategoryModel, initialCategory } from '../categories';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FlexiToastService } from 'flexi-toast';
import { lastValueFrom } from 'rxjs';

@Component({
  imports: [Blank, FormsModule],
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Create {
  readonly id = signal<string | undefined>(undefined)
  readonly cardTitle = computed(() => this.id() ? "Kategori Güncelle" : "Kategori Ekle")
  readonly btnName = computed(() => this.id() ? "Güncelle" : "Kaydet")

  readonly result = resource({
    params: () => this.id(),
    loader: async () => {
      var res = await lastValueFrom(
        this.#http.get<CategoryModel>(`api/categories/${this.id()}`)
      )
      return res
    }
  })
  readonly data = computed(() => this.result.value() ?? { ...initialCategory })

  readonly #activated = inject(ActivatedRoute)
  readonly #http = inject(HttpClient)
  readonly #toast = inject(FlexiToastService)
  readonly #router = inject(Router)

  constructor() {
    this.#activated.params.subscribe((res) => {
      if (res["id"]) {
        this.id.set(res["id"])
      }
    })
  }

  save(form: NgForm) {
    if (!form.valid) return;

    if (!this.id()) {
      this.#http.post("api/categories", this.data()).subscribe(res => {
        this.#toast.showToast("Başarılı", "Eklendi")
        this.#router.navigateByUrl("/categories")
      })
    }
    else {
      this.#http.put(`api/categories/${this.id()}`, this.data()).subscribe(res => {
        this.#toast.showToast("Başarılı", "Güncellendi")
        this.#router.navigateByUrl("/categories")
      })
    }
  }
}
