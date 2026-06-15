const outputContainer = document.getElementById('output-container');
const cmdInput = document.getElementById('cmd-input');

// Terminale yazı yazdırma fonksiyonu (HTML etiketlerini destekler)
function printToTerminal(text, className = '') {
    const div = document.createElement('div');
    div.innerHTML = text;
    if (className) div.className = className;
    outputContainer.appendChild(div);
    
    // Her yeni komutta ekranı otomatik olarak en aşağı kaydırır
    outputContainer.scrollTop = outputContainer.scrollHeight;
}

// Kullanıcı terminalde nereye tıklarsa tıklasın yazı yazma odağı (focus) inputta kalır
document.addEventListener('click', () => cmdInput.focus());

// Klavye hareketlerini dinle
cmdInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = cmdInput.value.trim();
        // Komutu ve argümanları boşluklara göre ayırır (ilerisi için örn: .set block)
        const [cmd, ...args] = input.split(' ');

        // Kullanıcının yazdığı komutu ekrana yansıt
        printToTerminal(`<span id="prompt">purpleminal $></span> ${input}`);

        if (input !== '') {
            if (cmd === 'clear') {
                outputContainer.innerHTML = '';
            } else if (commands[cmd]) {
                // Eğer komut bir fonksiyonsa (örn: date) çalıştır, düz metinse direkt yazdır
                const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
                printToTerminal(response);
            } else if (cmd === 'repo') {
                printToTerminal("GitHub depoları sorgulanıyor...", "accent");
                // Burayı kendi projelerine göre güncelleyebilirsin
                setTimeout(() => {
                    printToTerminal("Aktif Depolar:\n- Neon-Clicker-Pro\n- OmniLight-MCPE\n- Purpleminal", "success");
                }, 300);
            } else {
                // Yanlış komut girildiğinde hata mesajı verir
                printToTerminal(`Komut bulunamadı: '${cmd}'. Yardım listesi için <span class="accent">'help'</span> yazın.`, "error");
            }
        }

        // Giriş alanını temizle
        cmdInput.value = '';
    }
});

