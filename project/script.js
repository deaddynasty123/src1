// Простая анимация при клике на форум
document.querySelectorAll('.forum-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Обновление онлайн счетчика (симуляция)
function updateOnlineCount() {
    const usersElement = document.querySelector('.online-users p:first-child strong');
    const guestsElement = document.querySelector('.online-users p:last-child strong');
    
    if (usersElement && guestsElement) {
        const users = Math.floor(Math.random() * 20) + 40;
        const guests = Math.floor(Math.random() * 50) + 100;
        
        usersElement.textContent = users;
        guestsElement.textContent = guests;
    }
}

// Обновляем каждые 10 секунд
setInterval(updateOnlineCount, 10000);
