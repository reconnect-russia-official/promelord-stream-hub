document.addEventListener('click', function(e) {
  const btn = e.target.closest('a, button');
  if (btn) {
    const btnText = (btn.innerText || btn.getAttribute('aria-label') || 'Кнопка').trim();
    const cleanText = btnText.replace(/[^\w\sа-яёА-ЯЁ]/g, ''); // Убираем спецсимволы для надежности
    
    // Формируем текст сообщения
    const text = encodeURIComponent("🚀 Клик на сайте!\nКнопка: " + cleanText + "\nСтраница: " + window.location.pathname);
    
    // Хак с картинкой для обхода CORS
    const ping = new Image();
    ping.src = "https://api.telegram.org/bot8709983621:AAE3JmSmG5Uk_KApdcQu9t59Tkd-d2z5ycE/sendMessage?chat_id=1384396854&text=" + text;
  }
}, true);
