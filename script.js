// Простой JavaScript для плавной прокрутки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Простая валидация формы
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// Intersection Observer для анимаций при скролле (с повторением)
document.addEventListener('DOMContentLoaded', function() {
    // Настройки наблюдателя
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Создаем наблюдателя
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс видимости когда элемент появляется
                entry.target.classList.add('animate-visible');
            } else {
                // Убираем класс видимости когда элемент уходит с экрана
                entry.target.classList.remove('animate-visible');
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми анимируемыми элементами
    const animatedElements = document.querySelectorAll(
        '.animate-from-top, .animate-from-left, .animate-from-right, .animate-from-bottom'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});