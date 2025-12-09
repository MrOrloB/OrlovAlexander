class Slider {
    constructor(containerSelector) {
        // Находим элементы слайдера
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.warn('Слайдер не найден:', containerSelector);
            return;
        }
        
        this.slides = this.container.querySelectorAll('.slide');
        this.slider = this.container.querySelector('.slider');
        this.prevBtn = this.container.querySelector('.prev-btn');
        this.nextBtn = this.container.querySelector('.next-btn');
        
        // Текущий слайд
        this.currentIndex = 0;
        
        // Таймер для автопрокрутки
        this.interval = null;
        
        // Автоматическая инициализация
        this.init();
    }
    
    init() {
        if (!this.slides.length) return;
        
        // Показываем первый слайд
        this.showSlide(this.currentIndex);
        
        // Вешаем обработчики событий
        this.bindEvents();
        
        // Запускаем автопрокрутку
        this.startAutoSlide();
        
        console.log('Слайдер инициализирован');
    }
    
    showSlide(index) {
        if (!this.slider || !this.slides.length) return;
        
        // Рассчитываем смещение
        const slideWidth = this.slides[0].clientWidth;
        this.slider.style.transform = `translateX(-${index * slideWidth}px)`;
        
        // Обновляем активный класс
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        if (!this.slides.length) return;
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        if (!this.slides.length) return;
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }
    
    bindEvents() {
        // Кнопка "вперед"
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Кнопка "назад"
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        // Останавливаем автопрокрутку при наведении
        if (this.container) {
            this.container.addEventListener('mouseenter', () => {
                clearInterval(this.interval);
            });
            
            this.container.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
        
        // Пересчитываем при изменении размера окна
        window.addEventListener('resize', () => {
            this.showSlide(this.currentIndex);
        });
    }
    
    startAutoSlide() {
        clearInterval(this.interval);
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }
    
    destroy() {
        clearInterval(this.interval);
        // Здесь можно добавить удаление обработчиков событий
    }
}

// Экспортируем класс для использования
// Если используешь модули, можно: export default Slider;

// Автоматическая инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляр слайдера
    const slider = new Slider('.slider-container');
});