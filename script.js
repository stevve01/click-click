// Счётчик кликов и улучшений
let score = 0;
let clickMultiplier = 1;
let autoClickerCost = 50;
let doubleClickCost = 100;
let autoClickerActive = false;

// Обновляем счётчик
function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Клик на кнопку "Click me!"
document.getElementById('click-btn').addEventListener('click', function() {
    score += clickMultiplier;
    updateScore();
});

// Покупка авто-кликера
document.getElementById('auto-clicker').addEventListener('click', function() {
    if (score >= autoClickerCost && !autoClickerActive) {
        score -= autoClickerCost;
        updateScore();
        autoClickerActive = true;
        startAutoClicker();
        this.innerText = 'Auto-Clicker Active';
        this.disabled = true;
    }
});

// Покупка двойного клика
document.getElementById('double-click').addEventListener('click', function() {
    if (score >= doubleClickCost) {
        score -= doubleClickCost;
        clickMultiplier = 2; // Теперь клики удваиваются
        updateScore();
        this.innerText = 'Double Click Active';
        this.disabled = true;
    }
});

// Функция для авто-кликера
function startAutoClicker() {
    setInterval(function() {
        score += 1;
        updateScore();
    }, 1000); // Один клик каждую секунду
}

// Инициализация
updateScore();
