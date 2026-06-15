// Terminal komutları ve yanıtları
const commands = {
    help: `Kullanılabilir komutlar:
- <span class="accent">about</span>   : Bu terminal hakkında bilgi verir.
- <span class="accent">clear</span>   : Ekranı tamamen temizler.
- <span class="accent">repo</span>    : GitHub projelerini listeler.
- <span class="accent">social</span>  : Sosyal medya ve kanal linklerini gösterir.
- <span class="accent">date</span>    : Güncel tarih ve saati ekrana basar.`,

    about: `Purpleminal v1.0.0
Purpleguy tarafından geliştirilmiş %100 çalışan web tabanlı özel terminal.
SGM (Sapanca Gelişim Merkezi) altyapısı ile güçlendirildi.`,

    social: `YouTube: <a href="#" style="color:#f43f5e;" target="_blank">Kanal Linkin</a>
GitHub: <a href="#" style="color:#60a5fa;" target="_blank">Profil Linkin</a>`,

    date: () => {
        return new Date().toLocaleString('tr-TR');
    }
};

