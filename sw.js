const CACHE_NAME = 'purpleminal-v1';
const ASSETS = [
  'index.html',
  'css/style.css',
  'js/main.js',
  'js/commands.js',
  'manifest.json'
];

// 1. İNTERNETSİZ ÇALIŞMA ALTYAPISI (Dosyaları Önbelleğe Alma)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// 2. 24 SAATTE 6 BİLDİRİM SİSTEMİ (4 Saat Arayla Yerel Bildirim)
// Uygulama yüklendikten sonra arka plan döngüsünü başlatır
self.addEventListener('activate', (e) => {
  console.log('Purpleminal PWA Aktif!');
  
  // Bildirim havuzu (Sırayla atılacak havalı terminal mesajları)
  const notificationTitles = [
    "SGM Ağ Kontrolü",
    "Purpleminal Güncellemesi",
    "Güvenlik Uyarısı",
    "Sistem Durumu",
    "Derleyici Hazır",
    "Gizlilik Modu Aktif"
  ];
  const notificationMessages = [
    "Yerel ağ taraması arka planda başarıyla tamamlandı.",
    "Yeni siber güvenlik simülasyon modülleri hazır.",
    "Son 4 saat içinde hiçbir veriniz dışarı sızdırılmadı. Güvendesiniz.",
    "APU entegrasyonu stabil durumda çalışıyor.",
    "Programming modülü yeni scriptlerinizi derlemek için bekliyor.",
    "Terminal tamamen şifreli yerel moda geçti."
  ];

  let count = 0;
  
  // 4 saat = 4 * 60 * 60 * 1000 milisaniye
  const FOUR_HOURS = 4 * 60 * 60 * 1000; 

  setInterval(() => {
    if (Notification.permission === 'granted') {
      self.registration.showNotification(notificationTitles[count % 6], {
        body: notificationMessages[count % 6],
        icon: 'https://placehold.co/192x192/12071f/a855f7?text=P',
        vibrate: [200, 100, 200]
      });
      count++;
    }
  }, FOUR_HOURS);
});

