// portfolio.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.portfolio-item').forEach((item, i) => {
        let views = localStorage.getItem('p' + i) || 0;
        views = Number(views) + 1;
        localStorage.setItem('p' + i, views);
        
        const counter = document.createElement('span');
        counter.textContent = ` 👁️ ${views}`;
        counter.style.color = '#0f0';
        item.querySelector('h3').appendChild(counter);
    });
    console.log('Счётчики добавлены');
});