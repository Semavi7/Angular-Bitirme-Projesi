# Modern E-Ticaret Platformu | Angular & Nx Monorepo

Bu proje, **Angular** ve **Nx Monorepo** kullanılarak sıfırdan geliştirilmiş, yüksek performanslı ve modüler bir e-ticaret frontend platformudur. Proje, birbiriyle kod ve mantık paylaşan ancak bağımsız olarak derlenip dağıtılabilen `shop` ve `admin` adında iki uygulama ile bu uygulamaların kullandığı merkezi kütüphanelerden oluşmaktadır. Modern state yönetimi için projenin genelinde Angular'ın yeni nesil **Signals** yapısı kullanılmıştır.

## 🎯 Projenin Amacı

Bu projeyi geliştirirken temel amacım, kurumsal ölçekli frontend uygulamaları için modern mimarileri ve en iyi pratikleri uygulamaktı. **Nx Monorepo** ile kod paylaşımını ve proje yönetimini optimize etmek, **Angular Signals** ile karmaşık state yönetimini basitleştirip performansı artırmak ve **Standalone Components** mimarisi ile `NgModule`'a olan bağımlılığı azaltarak daha modüler ve sürdürülebilir bir yapı kurmayı hedefledim.

## 🛠️ Kullanılan Teknolojiler, Mimariler ve Desenler

### Mimari ve Yapı
&#8226; **Nx Monorepo Architecture:** – İki uygulama (shop, admin) ve paylaşılabilir kütüphaneleri (`ui`, `data-access`, `utils`) tek bir repoda yönetmek için.

&#8226; **Standalone Components:** – Uygulamanın temel yapı taşı olarak `NgModule`'sız, daha sade ve ağaç-sarsıntısına (tree-shaking) uygun bileşenler.

&#8226; **Library-Based Development:** – UI bileşenleri, veri erişim katmanları ve yardımcı fonksiyonlar gibi yeniden kullanılabilir mantıkları Nx kütüphanelerinde merkezileştirmek için.

&#8226; **Lazy Loading Routes:** – Rota bazlı kod bölme (code-splitting) yaparak ilk yükleme performansını optimize etmek için.

### Platform ve State Yönetimi
&#8226; **Angular:** – Projenin ana çatısı.

&#8226; **TypeScript:** – Tip güvenli (type-safe) kod geliştirmek için.

&#8226; **Angular Signals:** – Uygulama genelinde reaktif ve "fine-grained" (hassas taneli) state yönetimi sağlamak için. Boilerplate kodunu azaltır ve performansı artırır.

&#8226; **RxJS:** – Özellikle API çağrıları gibi asenkron operasyonları ve kompleks event akışlarını yönetmek için.

### API ve Veri İletişimi
&#8226; **HttpClientModule:** – Backend servisleriyle RESTful API iletişimi kurmak için.


&#8226; **Token-Based Interceptor:** – Giden her API isteğine JWT (Json Web Token) ekleyerek kimlik doğrulama işlemlerini merkezileştirmek için.

&#8226; **Data-Access Libraries:** – Her bir "feature" için veri çekme, güncelleme ve state yönetimi mantığını içeren özel Nx kütüphaneleri.

### Test ve Araçlar
&#8226; **JSON Server:** – Geliştirme aşamasında hızlı bir şekilde mock backend oluşturarak API'leri simüle etmek için.

## 📌 Proje İçeriği

### Kullanıcı Arayüzü (Shop Uygulaması)
&#8226; **Reaktif Ürün Vitrini:** – Filtreleme ve arama işlemleri sonucunda anlık güncellenen, akıcı bir ürün listeleme sayfası.

&#8226; **Signal Tabanlı Sepet:** – Sepete eklenen ürünlerin ve toplam tutarın anında güncellendiği, reaktif ve yüksek performanslı sepet yönetimi.

&#8226; **Dinamik Ürün Detay Sayfası:** – Rota parametresine göre ilgili ürün verisini çeken ve sunan sayfa.

&#8226; **Kullanıcı Paneli:** – Lazy-loading ile yüklenen, kullanıcının profilini ve sipariş geçmişini yönetebildiği özel alan.

### Admin Paneli (Admin Uygulaması)
&#8226; **Merkezi Dashboard:** – Satışlar, yeni kullanıcılar ve popüler ürünler gibi verileri sunan ana panel.

&#8226; **CRUD İşlemleri:** – Ürün, kategori ve kullanıcı yönetimi için modüler ve yeniden kullanılabilir formlar.

&#8226; **Paylaşılan Kütüphane Gücü:** – Veri tabloları, modal pencereler ve form elemanları gibi bileşenler, ortak `ui` kütüphanesinden çekilerek geliştirme süreci hızlandırıldı.

&#8226; **Rol Bazlı Rota Koruması (Route Guards):** – Kullanıcının yetkisine göre belirli sayfalara erişimini kısıtlayan güvenlik katmanı.

## 🔧 Öğrendiklerim & Deneyimlerim

Bu projeyi geliştirirken aşağıdaki konularda derinlemesine deneyim kazandım:

&#8226; **Nx Monorepo Yönetimi:** – Büyük bir projeyi küçük, yönetilebilir ve yeniden kullanılabilir kütüphanelere bölmenin, bakım ve geliştirme süreçlerini nasıl kolaylaştırdığını uygulamalı olarak gördüm.

&#8226; **Angular Signals ile State Yönetimi:** – Geleneksel state yönetimi kütüphanelerine (NgRx vb.) kıyasla Signals'in ne kadar az kodla, ne kadar performanslı ve okunabilir çözümler sunduğunu deneyimledim.

&#8226; **Gerçek Anlamda Modülerlik:** – Standalone Components ve kütüphane bazlı geliştirme sayesinde bir uygulamanın parçalarını (`feature`, `ui`, `data-access`, `util`) birbirinden nasıl net sınırlarla ayıracağımı öğrendim.

&#8226; **Frontend Mimarisi Tasarımı:** – Sadece component yazmanın ötesinde, ölçeklenebilir bir frontend projesinin nasıl planlanacağını, veri akışının nasıl tasarlanacağını ve kodun nasıl organize edileceğini tecrübe ettim.

&#8226; **Kod Kalitesi ve Tutarlılık:** – Bir monorepo içinde ESLint ve Prettier kurallarını zorunlu kılarak onlarca kütüphane ve iki uygulama arasında bile tek bir elden çıkmış gibi tutarlı bir kod tabanı oluşturmayı öğrendim.

## 🎉 Sonuç & Gelecek Planlarım

Bu proje, modern frontend geliştirmenin en güncel pratiklerini uygulayarak Angular ekosistemindeki yetkinliklerimi bir üst seviyeye taşımamı sağladı. Nx ve Signals'in birleşimi, özellikle büyük ve karmaşık projeler için muazzam bir geliştirme deneyimi sunuyor.

İleride projeye aşağıdaki özellikleri eklemeyi planlıyorum:

&#8226; **Server-Side Rendering (SSR):** – Angular Universal entegrasyonu ile SEO performansını ve ilk sayfa yükleme hızını (FCP) iyileştirmek.

&#8226; **Storybook Entegrasyonu:** – Paylaşılan `ui` kütüphanesindeki bileşenleri izole bir ortamda geliştirmek, test etmek ve dokümante etmek.

&#8226; **Nx Cloud Entegrasyonu:** – Derleme ve test süreçlerini önbelleğe alarak CI/CD pipeline'larını önemli ölçüde hızlandırmak.

Bu projeyi ve değerli bilgilerini bizimle paylaşan kıymetli eğitmenim Taner Saydam hocama, bu kapsamlı öğrenme süreci için teşekkür ederim!

![Screenshot_1](https://github.com/user-attachments/assets/6a531ec0-2406-4814-aa97-4cd119f67ac4)
![Screenshot_2](https://github.com/user-attachments/assets/dfdd0de7-fe26-48df-9a03-f9c0edaa19d4)
![Screenshot_3](https://github.com/user-attachments/assets/3b1de020-b21b-4dea-8bfe-013f093a9cdc)
![Screenshot_4](https://github.com/user-attachments/assets/40458cfb-385a-4a14-a2fe-20cad0686369)
![Screenshot_5](https://github.com/user-attachments/assets/7e32cc4e-b3ca-49c2-9364-bc40c9c73e02)
![Screenshot_6](https://github.com/user-attachments/assets/4e06bd9c-bb52-4731-bee3-5b77edae5add)
![Screenshot_7](https://github.com/user-attachments/assets/3e7af5a5-cd68-4603-8a94-bccbfdfd5738)
![Screenshot_8](https://github.com/user-attachments/assets/fc9f2a54-c753-451f-b9ee-23e529b5095d)
![Screenshot_9](https://github.com/user-attachments/assets/27ef2aec-97bd-4332-9658-e8496c30bc09)

