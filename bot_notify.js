document.addEventListener('click', function(e) {
  const btn = e.target.closest('a, button');
  if (btn) {
    const btnText = btn.innerText.trim() || btn.getAttribute('aria-label') || 'Кнопка';
    const currentUrl = window.location.href;
    
    // Формируем красивое сообщение
    const message = "🚀 *Новый клик на сайте!*\n\n" +
                    "🔘 *Кнопка:* " + btnText + "\n" +
                    "🔗 *Адрес:* " + currentUrl;
    
    const url = "https://api.telegram.org/bot8709983621:AAE3JmSmG5Uk_KApdcQu9t59Tkd-d2z5ycE/sendMessage";
    
    // Используем FormData для отправки данных
    const formData = new FormData();
    formData.append('chat_id', '1384396854');
    formData.append('text', message);
    formData.append('parse_mode', 'Markdown');
    
    // Отправляем через sendBeacon (надежно)
    navigator.sendBeacon(url, formData);
  }
}, true);
