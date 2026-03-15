document.addEventListener('click', function(e) {
  const btn = e.target.closest('button, a');
  if (btn) {
    const text = btn.innerText.trim() || btn.getAttribute('aria-label') || 'Кнопка';
    const href = btn.getAttribute('href');
    
    // Отправляем данные через beacon — это спецметод для аналитики, 
    // который работает даже после закрытия страницы
    const data = new FormData();
    data.append('событие', 'Клик по кнопке');
    data.append('кнопка', text);
    data.append('куда_ведет', href || 'без ссылки');
    
    navigator.sendBeacon('https://formspree.io/f/mqaerrql', data);
  }
}, true);
