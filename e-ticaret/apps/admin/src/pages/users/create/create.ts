import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, resource, signal, ViewEncapsulation } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { initialUser, UserModel } from '@shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FlexiToastService } from 'flexi-toast';
import Blank from 'apps/admin/src/components/blank/blank';
import { FormsModule, NgForm } from '@angular/forms';
import { BreadcrumbModel } from '../../layouts/breadcrumb/breadcrumb';

@Component({
  imports: [Blank, FormsModule],
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Create {
  readonly id = signal<string | undefined>(undefined)
  readonly result = resource({
    params: () => this.id(),
    loader: async () => {
      var res = await lastValueFrom(this.#http.get<UserModel>(`api/users/${this.id()}`))
      this.breadcrumbs.update(prev => [...prev, { title: res.fullName, url: `/users/edit/${this.id()}`, icon: 'edit' }])
      return res
    }
  })
  readonly data = linkedSignal(() => this.result.value() ?? { ...initialUser })
  readonly title = computed(() => this.id() ? "Kullanıcı Güncelle" : "Kullanıcı Ekle")
  readonly btnName = computed(() => this.id() ? "Güncelle" : "Kaydet")
  readonly breadcrumbs = signal<BreadcrumbModel[]>([{ title: 'Kullanıcılar', url: '/users', icon: 'group' }])
  readonly #http = inject(HttpClient)
  readonly #activated = inject(ActivatedRoute)
  readonly #router = inject(Router)
  readonly #toast = inject(FlexiToastService)

  constructor() {
    this.#activated.params.subscribe(res => {
      if (res["id"]) {
        this.id.set(res["id"])
      }
      else {
        this.breadcrumbs.update(prev => [...prev, { title: 'Ekle', url: '/users/create', icon: 'add' }])
      }
    })
  }

  save(form: NgForm) {
    if (!form.valid) return

    this.data.update((prev) => ({ ...prev, fullName: `${prev.firstName} ${prev.lastName}` }))
    if (!this.id()) {
      this.#http.post("api/users", this.data()).subscribe(res => {
        this.#toast.showToast("Başarılı", "Kaydedildi")
        this.#router.navigateByUrl("/users")
      })
    }
    else {
      this.#http.put(`api/users/${this.id()}`, this.data()).subscribe(res => {
        this.#toast.showToast("Başarılı", "Güncellendi")
        this.#router.navigateByUrl("/users")
      })
    }
  }
}
