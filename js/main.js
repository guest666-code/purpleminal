const outputContainer = document.getElementById('output-container');
const cmdInput = document.getElementById('cmd-input');

// Terminale yazı yazdırma fonksiyonu (HTML etiketlerini ve renk sınıflarını destekler)
function printToTerminal(text, className = '') {
    const div = document.createElement('div');
    div.innerHTML = text;
    if (className) div.className = className;
    outputContainer.appendChild(div);
    
    // Her yeni komutta ekranı otomatik olarak en aşağı kaydırır
    outputContainer.scrollTop = outputContainer.scrollHeight;
}

// Kullanıcı ekranda nereye tıklarsa tıklasın odak (focus) her zaman yazı yazma alanında kalır
document.addEventListener('click', () => cmdInput.focus());

// Klavye hareketlerini dinleme (Enter tuşuna basıldığında tetiklenir)
cmdInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = cmdInput.value.trim();
        
        // Gizlilik ve esneklik: Komutu tamamen küçük harfe çeviriyoruz
        const lowerInput = input.toLowerCase();

        // Kullanıcının yazdığı orijinal halini ekrana yansıt (Görsel olarak büyük yazdıysa öyle görünsün)
        printToTerminal(`<span id="prompt">purpleminal $></span> ${input}`);

        if (input !== '') {
            // 1. EKRAN TEMİZLEME KOMUTU (Özel durum)
            if (lowerInput === 'clear') {
                outputContainer.innerHTML = '';
            } 
            // 2. TAM METİN EŞLEŞMESİ (Örn: "pkg update", "cat readme" gibi çok kelimeli komutlar için)
            else if (commands[lowerInput]) {
                const response = typeof commands[lowerInput] === 'function' ? commands[lowerInput]() : commands[lowerInput];
                printToTerminal(response);
            } 
            // 3. TEK KELİMELİK ANA KOMUT KONTROLÜ (İleride argüman eklemek istersen alt yapı hazır)
            else {
                const [cmd] = lowerInput.split(' ');
                
                if (commands[cmd]) {
                    const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
                    printToTerminal(response);
                } else if (cmd === 'repo') {
                    // Depo sorgulama simülasyonu
                    printToTerminal("GitHub depoları sorgulanıyor...", "accent");
                    setTimeout(() => {
                        printToTerminal("Aktif Depolar:\n- Neon-Clicker-Pro\n- OmniLight-MCPE\n- Purpleminal", "success");
                    }, 300);
                } else {
                    // Komut bulunamadığında tamamen güvenli yerel hata mesajı
                    printToTerminal(`Komut bulunamadı: '${input}'. Modülleri görmek için <span class="accent">'help'</span> yazın.`, "error");
                }
            }
        }

        // Giriş alanını bir sonraki komut için temizle
        cmdInput.value = '';
    }
});
