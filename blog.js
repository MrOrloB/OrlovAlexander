document.addEventListener('DOMContentLoaded', function() {
    // 1. Добавляем дату "последнего обновления"
    const now = new Date();
    const updateDate = document.createElement('div');
    updateDate.innerHTML = `📅 Последнее обновление: ${now.toLocaleDateString('ru-RU')} ${now.toLocaleTimeString('ru-RU')}`;
    updateDate.style.cssText = `
        background: #002200;
        border: 1px solid #0f0;
        padding: 10px;
        margin: 20px 0;
        text-align: center;
        color: #00ff00;
        border-radius: 5px;
        font-size: 0.9rem;
    `;
    
    // Вставляем после заголовка
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(updateDate);
    }
    
    // 2. Подсветка всех pre/code блоков (минимальная)
    document.querySelectorAll('pre, code').forEach(block => {
        block.style.border = '1px solid #0f0';
        block.style.padding = '10px';
        block.style.background = '#001100';
        block.style.borderRadius = '5px';
        block.style.margin = '10px 0';
        block.style.display = 'block';
    });
    
    // 3. Добавляем кнопку "Совет по безопасности"
    const tipBtn = document.createElement('button');
    tipBtn.textContent = '💡 Получить совет';
    tipBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #0f0;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
        font-weight: bold;
    `;
    
    tipBtn.onclick = function() {
        const tips = [
            'Используйте менеджер паролей!',
            'Включите двухфакторную аутентификацию',
            'Регулярно обновляйте программы',
            'Не открывайте подозрительные письма',
            'Делайте бэкапы важных данных'
        ];
        alert('Совет по безопасности: ' + tips[Math.floor(Math.random() * tips.length)]);
    };
    
    document.body.appendChild(tipBtn);
    
    console.log('blog.js: Функции блога активированы');
});