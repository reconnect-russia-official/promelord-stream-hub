document.addEventListener('click', function(e) {
  const btn = e.target.closest('a, button');
  if (btn) {
    const btnText = (btn.innerText || btn.getAttribute('aria-label') || 'Кнопка').trim();
    // Убираем лишние символы для надежности
    const msg = "🚀 Клик на сайте!\nКнопка: " + btnText.replace(/[^\w\sа-яёА-ЯЁ]/g, '');
    
    // Отправляем запрос на твой Cloudflare Worker
    // Используем Image для максимальной совместимости
    const ping = new Image();
    ping.src = "https://odd-hill-715a.boro-foma.workers.dev?text=" + encodeURIComponent(msg);
  }
}, true);
