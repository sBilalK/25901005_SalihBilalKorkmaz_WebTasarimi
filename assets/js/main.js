// Sayfa yüklendiğinde çalışacak ana JavaScript dosyası

// DOM ağacı tamamen hazır olduğunda çalışacak ana dinleyiciyi ekliyoruz
document.addEventListener("DOMContentLoaded", function () {

    // Tema değiştirme butonunu id seçicisi üzerinden sayfadan alıyoruz
    const temaButonu = document.getElementById("tema-degistir-butonu");

    // İletişim formunu id seçicisi üzerinden sayfadan alıyoruz
    const iletisimFormu = document.getElementById("academic-form");

    // Form işlem sonuçlarının ve uyarılarının yazdırılacağı paragraf etiketini seçiyoruz
    const formSonucMesaji = document.getElementById("form-sonuc");

    // Mobil menü açma kapama butonunu id seçicisi üzerinden alıyoruz
    const mobilMenuButonu = document.getElementById("nav-toggle");

    // Navigasyon menüsünü sınıf seçicisi üzerinden alıyoruz
    const navMenusu = document.querySelector(".nav-menu");

    // Tema butonuna tıklama olayı (click event) dinleyicisi bağlıyoruz
    temaButonu.addEventListener("click", function () {

        // Body öğesindeki koyu-tema sınıfını ekler veya varsa kaldırır
        document.body.classList.toggle("koyu-tema");

        // Body üzerinde koyu-tema sınıfının aktif olup olmadığını kontrol ediyoruz
        const koyuTemaAktif = document.body.classList.contains("koyu-tema");

        // Koyu tema aktifse buton metnini Açık Tema, değilse Koyu Tema olarak güncelliyoruz
        temaButonu.textContent = koyuTemaAktif ? "Açık Tema" : "Koyu Tema";
    });

    // İletişim formunun gönderilme (submit) anını yakalamak için olay dinleyicisi ekliyoruz
    iletisimFormu.addEventListener("submit", function (olay) {

        // Formun sayfayı yenilemesini veya varsayılan gönderim davranışını engelliyoruz
        olay.preventDefault();

        // Ad soyad giriş alanındaki değeri okuyoruz ve baş/son boşluklarını temizliyoruz
        const adSoyadDegeri = document.getElementById("ad-soyad").value.trim();

        // E-posta giriş alanındaki değeri okuyoruz ve baş/son boşluklarını temizliyoruz
        const epostaDegeri = document.getElementById("eposta").value.trim();

        // Mesaj metin alanındaki değeri okuyoruz ve baş/son boşluklarını temizliyoruz
        const mesajDegeri = document.getElementById("mesaj").value.trim();

        // Herhangi bir alanın boş bırakılıp bırakılmadığını kontrol ediyoruz
        if (adSoyadDegeri === "" || epostaDegeri === "" || mesajDegeri === "") {

            // Boş alan varsa kullanıcıya sayfadaki paragraf üzerinden uyarı mesajı veriyoruz
            formSonucMesaji.textContent = "Lütfen tüm alanları eksiksiz doldurun.";

            // Hata mesajı rengini dikkat çekici uyarı kırmızısı yapıyoruz
            formSonucMesaji.className = "form-alert hata";

            // Fonksiyonun kalan kodlarının çalışmasını sonlandırıyoruz
            return;
        }

        // E-posta adresinin içinde @ işareti bulunup bulunmadığını kontrol ediyoruz
        if (!epostaDegeri.includes("@")) {

            // @ işareti yoksa şartname gereği belirtilen standart uyarıyı yazdırıyoruz
            formSonucMesaji.textContent = "Geçerli bir e-posta yazın";

            // Hata mesajı stil sınıfını atıyoruz
            formSonucMesaji.className = "form-alert hata";

            // Fonksiyonun kalan kodlarının çalışmasını sonlandırıyoruz
            return;
        }

        // Tüm alanlar geçerli olduğunda şartnamede istenen formatta teşekkür mesajını yazdırıyoruz
        formSonucMesaji.textContent = "Teşekkürler, " + adSoyadDegeri + ", mesajınız alındı.";

        // Başarılı gönderim stil sınıfını paragrafa atıyoruz
        formSonucMesaji.className = "form-alert basari";

        // Form içindeki tüm giriş alanlarını sıfırlıyoruz ve temizliyoruz
        iletisimFormu.reset();
    });

    // Mobil menü butonuna tıklama olayı dinleyicisi bağlıyoruz
    mobilMenuButonu.addEventListener("click", function () {

        // Navigasyon menüsünün mobilde açılıp kapanmasını sağlıyoruz
        navMenusu.classList.toggle("acik");
    });
});
