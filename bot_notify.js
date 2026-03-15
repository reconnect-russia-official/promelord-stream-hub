document.addEventListener('click', function(e) {
  const btn = e.target.closest('a, button');
  if (btn) {
    const btnText = btn.innerText.trim() || btn.getAttribute('aria-label') || 'Кнопка';
    const msg = encodeURIComponent("🚀 Клик на сайте!\nКнопка: " + btnText);
    
    // Используем создание невидимой картинки для отправки GET-запроса
    // Это обходит все блокировки CORS в 99% случаев
    const img = new Image();
    img.src = "https://api.telegram.org/bot8709983621:AAE3JmSmG5Uk_KApdcQu9t59Tkd-d2z5ycE/sendMessage?chat_id=1384396854&text=" + msg;
  }
}, true);
