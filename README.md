# Kişisel Tanıtım Sayfası Web Projesi (Akademik CV)

## 1. Öğrenci Bilgileri
* **Ad Soyad:** Salih Bilal Korkmaz
* **Öğrenci Numarası:** 25901005
* **Program / Bölüm:** Bilgi Güvenliği Teknolojisi (Çift Anadal: Yapay Zeka ve Makine Öğrenmesi)
* **Ders:** BGY207 – Web Tasarımı
* **Öğretim Elemanı:** Dr. Mustafa FENERCİ
* **Akademik Dönem:** 2026-2027 Güz Dönemi
* **Tasarım Şablonu Referansı:** [Hugo Blox Academic CV Theme](https://github.com/HugoBlox/hugo-theme-academic-cv)

---

## 2. Proje Açıklaması ve Tasarım Mimarisi (Hugo Blox Academic CV)
Bu proje, BGY207 Web Tasarımı dersi teknik şartnamesine tam uyumlu olarak HTML5, CSS3 ve saf JavaScript teknolojileriyle sıfırdan geliştirilmiş akademik bir kişisel özgeçmiş (Academic CV) web sitesidir. 

Tasarımda dünya genelinde araştırmacılar, akademisyenler ve mühendisler tarafından standart olarak kullanılan **Hugo Blox Academic CV** teması esas alınmıştır:
1. **Minimalist Akademik Düzen:** Dikkat dağıtıcı gereksiz animasyonlar, parlak neonlar ve yapay efektler tamamen kaldırılarak; sakin, okunaklı ve prestijli bir akademik tipografi kurulmuştur. İsim altında herhangi bir animasyon yer almaz; yazarın kurumsal rolü ve üniversitesi sade ve net bir şekilde sergilenir.
2. **Yazar Profil Kartı (Sidebar) & Biyografi:** Sayfa başında sol sütunda dairesel avatar görseli, isim, akademik ünvan, üniversite ve akademik profil butonları; sağ sütunda ise detaylı biyografi metni ile araştırma alanları yer alır.
3. **Akademik Zaman Çizelgesi ve Projeler:** Şartnameye uygun olarak kronolojik eğitim sıralı listesi (`<ol>`), öne çıkan çalışmalar sırasız listesi (`<ul>`) ve 3 sütunlu semantik yetkinlik matrisi (`<table>`) entegre edilmiştir.
4. **İletişim ve Doğrulama:** Şartname kurallarına uygun istemci taraflı doğrulama formunun yanı sıra Kapadokya Üniversitesi resmi web sitesine dış bağlantı verilmiştir.

---

## 3. Sayfanın Açılması ve Çalıştırılması
1. `tanitim-sayfasi/` klasörünün içerisine giriniz.
2. `index.html` dosyasına çift tıklayarak veya herhangi bir modern web tarayıcısına (Chrome, Edge, Firefox, Safari) sürükleyip bırakarak sayfayı doğrudan görüntüleyebilirsiniz.
3. Proje tamamen saf yerel web teknolojileriyle yazıldığından harici bir web sunucusu, Hugo derleyicisi veya paket yöneticisi kurulumu gerektirmez.

---

## 4. Kullanılan Görsellerin Kaynağı ve Telif / Lisans Durumu
* **Kullanılan Görseller:** 
  * `assets/img/profil.svg` (Akademik profil avatarı olarak kullanılan özgün vektör görseli)
  * `assets/img/profil.jpg` (Alternatif format yedeği)
* **Açıklama:** Sitede kişisel vesikalık fotoğraf yerine, öğrencinin çalışma alanlarını (siber güvenlik, terminal mimarisi, otonom donanım ve yapay zeka) temsil eden özgün bir teknik kimlik vektör çizimi kullanılmıştır.
* **Kaynak:** Proje kapsamında vektörel olarak üretilmiş özgün çizim.
* **Lisans:** Telifsiz (Unrestricted / Public Domain) ve akademik proje kullanımına uygundur.

---

## 5. Kullanılan Yapay Zekâ Araçları Beyanı
* **Kullanılan Araç:** Antigravity (Google DeepMind - Gemini 3.8 Flash modeli)
* **Kullanım Kapsamı:** Hugo Blox Academic CV tasarım düzeninin HTML5/CSS3 semantiğine uyarlanması, WCAG 2.2 AA kontrast ve erişilebilirlik standartlarının doğrulanması ve zorunlu satır içi yorum satırlarının şartnameye uygun yapılandırılmasında yardımcı araç olarak kullanılmıştır.

---

## 6. Kişisel Veri ve Etik Beyanı
Şartnamenin C maddesi (Ö.Ç. 6) uyarınca, sayfada gerçek ev adresi, telefon numarası ve T.C. kimlik numarası gibi hassas kişisel verilere **kesinlikle yer verilmemiştir**. Sitede yalnızca ad soyad, akademik program bilgileri, teknik beceriler ve kurumsal iletişim formu bulunmaktadır.

---

## 7. Dosya ve Klasör Hiyerarşisi
```text
tanitim-sayfasi/
├── index.html          # Semantik HTML5 iskeleti ve Hugo Academic CV içerik yapısı
├── README.md           # Proje tanıtımı, akademik tasarım raporu ve lisans beyanı
└── assets/
    ├── css/
    │   └── style.css   # Hugo Academic CV stil kuralları, koyu/açık tema ve duyarlı CSS
    ├── js/
    │   └── main.js     # Form doğrulama ve tema düğmesi olay yönetimi (satır satır yorumlu)
    └── img/
        ├── profil.svg  # Sayfada kullanılan akademik kimlik vektör görseli
        └── profil.jpg  # Alternatif formatlı görsel dosyası
```

---

## 8. Canlı Sunum ve Değerlendirme Rehberi (3 Dakikalık Gösterim)
* **Akademik Profil ve Gezinme:** Hugo Academic tarzı sol yazar profili ve üst menü bağlantıları (`#hakkimda`, `#beceriler`, `#iletisim`) sayfa içi ilgili bloklara pürüzsüzce odaklanır.
* **Görsel ve Tablo:** `assets/img/profil.svg` anlamlı `alt` metniyle yüklenir; beceriler tablosu `thead`, `tbody` ve `th` etiketleriyle semantik olup dar ekranlarda taşma yapmaz.
* **Form Doğrulama Mekanizması:** Alanlardan biri boş bırakıldığında veya e-posta alanında `@` işareti yer almadığında gönderim engellenir (`event.preventDefault()`) ve uyarı `alert()` yerine sayfadaki durum paragrafında gösterilir. Tüm alanlar doldurulduğunda teşekkür mesajı verilir ve form `reset()` edilir.
* **Tema Değiştirici:** Butona tıklandığında `body` etiketine `koyu-tema` sınıfı eklenip kaldırılır ve buton metni dinamik olarak `Koyu Tema` / `Açık Tema` şeklinde güncellenir.
* **Duyarlı (Responsive) Düzen:** Tarayıcı genişliği 600 piksel ve altına küçültüldüğünde menü ve ızgaralar dikey hizalanır, sayfada yatay kaydırma çubuğu oluşmaz.
