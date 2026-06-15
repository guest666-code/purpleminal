// Purpleminal Gelişmiş Komut ve Modül Yapısı
const commands = {
    // 1. ANA MENÜ VE YARDIM
    help: `--- PURPLEMINAL MODÜLLERİ ---
Aşağıdaki ana kategorileri yazarak alt komutları görebilirsiniz:

- <span class="accent">linux</span>       : Basic Linux Usage (Temel Linux Kullanımı)
- <span class="accent">code</span>        : Programming and Scripting (Programlama Araçları)
- <span class="accent">net</span>         : Networking and Remote (Ağ ve Uzaktan Erişim)
- <span class="accent">pkg</span>         : Package Management (Paket Yönetim Simülasyonu)
- <span class="accent">server</span>      : Servers (Sunucu Yönetim Komutları)
- <span class="accent">pentest</span>     : Penetration Testing (Sızma Testi Laboratuvarı)
- <span class="accent">apu</span>         : Purpleminal APUIntegration (Özel Donanım/Yapay Zeka Durumu)
- <span class="accent">setup</span>       : Custom Purpleminal Setup (Terminal Özelleştirme)

Genel Komutlar: <span class="accent">sysinfo</span>, <span class="accent">about</span>, <span class="accent">social</span>, <span class="accent">clear</span>, <span class="accent">date</span>`,

    about: `Purpleminal v1.1.0 - Orijinal Terminal Projesi
Purpleguy tarafından SGM altyapısı ile geliştirilmiştir. 
Tamamen yerel (local) çalışır ve gizliliğinizi korur.`,

    social: `YouTube: <a href="#" style="color:#f43f5e;" target="_blank">Purpleguy YouTube</a>
GitHub: <a href="#" style="color:#60a5fa;" target="_blank">SGM GitHub</a>`,

    date: () => new Date().toLocaleString('tr-TR'),

    sysinfo: () => {
        return `--- YEREL SİSTEM BİLGİLERİ ---
<span class="accent">İşletim Sistemi:</span> ${navigator.platform}
<span class="accent">Ekran Çözünürlüğü:</span> ${screen.width}x${screen.height}
<span class="accent">Sistem Dili:</span> ${navigator.language}
<span class="accent">Çekirdek (Cores):</span> ${navigator.hardwareConcurrency || "Bilinmiyor"}
<span class="success">[GÜVENLİ] Veriler hiçbir sunucuya gönderilmez, sadece tarayıcıda işlenir.</span>`;
    },

    // 2. BASIC LINUX USAGE
    linux: `--- BASIC LINUX USAGE (Temel Kullanım) ---
- <span class="accent">ls</span>          : Dizin içindeki dosyaları listeler.
- <span class="accent">pwd</span>         : Şu an hangi dizinde olduğunuzu gösterir.
- <span class="accent">whoami</span>      : Aktif kullanıcı adını basar.
- <span class="accent">cat readme</span>  : Örnek bir dosya içeriğini okur.`,

    ls: `<span class="success">assets/</span>   <span class="success">css/</span>   <span class="success">js/</span>   index.html   readme.md`,
    pwd: `/home/purpleguy/purpleminal`,
    whoami: `purpleguy (SGM Administrator)`,
    "cat readme": `### Purpleminal Projesine Hoş Geldiniz!
Bu terminal %100 yerel ve özgün olarak kodlanmıştır.`,

    // 3. PROGRAMMING AND SCRIPTING
    code: `--- PROGRAMMING & SCRIPTING ---
Terminal üzerinde kodlama simülasyonları:
- <span class="accent">run-js</span>      : Örnek bir JavaScript fonksiyonu çalıştırır.
- <span class="accent">run-python</span>  : Basit bir Python script simülasyonu başlatır.
- <span class="accent">compiler</span>    : SGM Derleyici durumunu kontrol eder.`,

    "run-js": `[JS] console.log("Purpleminal Başlatıldı!");
>> Purpleminal Başlatıldı!
Süreç 0.02ms içinde tamamlandı.`,
    "run-python": `[Python] print([x**2 for x in range(5)])
>> [0, 1, 4, 9, 16]`,
    compiler: `<span class="success">[HAZIR]</span> SGM Web Compiler v1.0 aktif. Dil: JavaScript/HTML5`,

    // 4. NETWORKING AND REMOTE
    net: `--- NETWORKING AND REMOTE ---
Ağ araçları ve uzak bağlantı komutları:
- <span class="accent">ping</span>        : Yerel ağ gecikmesini test eder.
- <span class="accent">ssh-keygen</span>  : Güvenli yerel SSH anahtarı üretir.
- <span class="accent">ip-status</span>   : Yerel ağ kartı durumunu gösterir.`,

    ping: `PING localhost (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.04 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.03 ms
--- localhost ping istatistikleri ---
2 paket iletildi, 0% paket kaybı.`,
    "ssh-keygen": `Yerel RSA anahtar çifti oluşturuluyor (4048-bit)...
[+++++] Anahtar başarıyla oluşturuldu: SHA256:PrplMnlLocalKey...`,
    "ip-status": `lo0 (Loopback): 127.0.0.1 <span class="success">[AKTİF]</span>
wlan0 (Wireless): 192.168.1.X <span class="success">[YEREL BAĞLANTI]</span>`,

    // 5. PACKAGE MANAGEMENT
    pkg: `--- PACKAGE MANAGEMENT (Paket Yönetimi) ---
- <span class="accent">pkg install</span> : Yeni modüller veya paketler simüle eder.
- <span class="accent">pkg update</span>  : Paket listesini sanal olarak günceller.`,

    "pkg update": `Paket listeleri güncelleniyor...
[OK] https://repository.purpleguy.sgm/purpleminal InRelease
Tüm sanal paketler güncel!`,
    "pkg install": `Kullanım: <span class="accent">pkg install [paket_adi]</span>
Örnek: 'pkg install nodejs' yazmayı deneyin.`,
    "pkg install nodejs": `Sanal paket indiriliyor: nodejs-v20...
[████████████████████] 100%
Başarıyla kuruldu: nodejs (Sanal ortamda aktif).`,

    // 6. SERVERS
    server: `--- SERVERS (Sunucu Yönetimi) ---
- <span class="accent">srv-status</span>  : Sanal web sunucusunun durumunu gösterir.
- <span class="accent">srv-start</span>   : Yerel bir test sunucusu başlatır.`,

    "srv-status": `SGM Local Server: <span class="error">DURDURULDU</span>
Port: 8080`,
    "srv-start": `SGM Local Server başlatılıyor...
Port 8080 dinleniyor.
Tarayıcı üzerinden yerel test modülü aktif edildi. <span class="success">[OK]</span>`,

    // 7. PENETRATION TESTING
    pentest: `--- PENETRATION TESTING (Sızma Testi Labı) ---
Tamamen zararsız, eğitim amaçlı yerel simülasyonlar:
- <span class="accent">nmap-local</span>  : Kendi tarayıcı ortamındaki açık portları simüle eder.
- <span class="accent">hash-gen</span>    : Yazılan metni yerel olarak SHA-256 koduna çevirir.`,

    "nmap-local": `localhost (127.0.0.1) üzerinde tarama başlatılıyor...
PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https
8080/tcp open  http-alt
Tarama 0.15 saniyede tamamlandı.`,
    "hash-gen": `Kullanım: Bu özelliği gelecekteki güncellemeyle dinamik hale getirebilirsin!`,

    // 8. PURPLEMINAL APU INTEGRATION (Accelerated Processing Unit / Donanım Entegrasyonu)
    apu: `--- PURPLEMINAL APU INTEGRATION ---
SGM grafik ve işlem hızlandırıcı birimi (Accelerated Processing Unit) durumu:
<span class="accent">APU Modeli:</span> Purpleminal Core-V1 (Sanal Çekirdek)
<span class="accent">Hızlandırma Durumu:</span> HTML5 Canvas ve CSS 3D Donanım ivmesi <span class="success">AKTİF</span>
<span class="accent">AI Katmanı:</span> Çevrimdışı Yapay Zeka Yanıt Motoru v1.0.`,

    // 9. CUSTOM PURPLEMINAL SETUP
    setup: `--- CUSTOM PURPLEMINAL SETUP ---
Terminal ayarlarını o anlık değiştirebilirsiniz:
- <span class="accent">theme-dark</span>  : Ultra karanlık moda geçer.
- <span class="accent">theme-neon</span>  : Parlak mor neon moduna geçer.
- <span class="accent">reset-setup</span> : Varsayılan ayarlara döner.`
};
