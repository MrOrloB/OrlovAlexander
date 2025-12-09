// ==================== ПРОСТОЙ API ====================
async function loadCrypto() {
    const box = document.getElementById('crypto-widget');
    if (!box) return;
    
    box.innerHTML = '<div class="loading">Загрузка...</div>';
    
    try {
        // Самый простой запрос
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=rub');
        const data = await res.json();
        
        box.innerHTML = `
            <div class="crypto-item">
                <h3>₿ Bitcoin</h3>
                <p>${data.bitcoin.rub.toLocaleString('ru-RU')} ₽</p>
            </div>
            <div class="crypto-item">
                <h3>Ξ Ethereum</h3>
                <p>${data.ethereum.rub.toLocaleString('ru-RU')} ₽</p>
            </div>
        `;
    } catch {
        // Если не получилось - показываем статику
        box.innerHTML = `
            <div class="crypto-item">
                <h3>₿ Bitcoin</h3>
                <p>7 000 000 ₽</p>
            </div>
            <div class="crypto-item">
                <h3>Ξ Ethereum</h3>
                <p>230 000 ₽</p>
            </div>
            <p style="color:#ff3300; font-size:0.8rem;">Курсы обновляются</p>
        `;
    }
}

// ==================== НАВИГАЦИЯ ====================
function initNav() {
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.onclick = (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior: 'smooth'});
            }
        };
    });
    
    // Подсветка меню
    window.onscroll = () => {
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        let current = '';
        document.querySelectorAll('section[id]').forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) current = s.id;
        });
        document.querySelector(`nav a[href="#${current}"]`)?.classList.add('active');
    };
}

// ==================== ЗАПУСК ====================
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    loadCrypto();
});