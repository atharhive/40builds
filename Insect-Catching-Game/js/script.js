const gameScreens = document.querySelectorAll('.screen');
const selectTargetButtons = document.querySelectorAll('.select-target-btn');
const startGameButton = document.getElementById('start-game-btn');
const gameAreaContainer = document.getElementById('game-area');
const gameTimeElement = document.getElementById('gameTime');
const gameScoreElement = document.getElementById('gameScore');
const gameMessageElement = document.getElementById('gameMessage');
const restartGameButton = document.getElementById('restartGameBtn');

let gameSeconds = 0;
let gameScore = 0;
let selectedBug = {};
let gameTimerInterval;
let bugSpawnInterval;
let gameDuration = 30; // Default game duration in seconds (new feature)

startGameButton.addEventListener('click', () => gameScreens[0].classList.add('up'));

selectTargetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedBug = { src, alt };
        gameScreens[1].classList.add('up');
        initializeGame();
    });
});

restartGameButton.addEventListener('click', () => {
    resetGame();
    initializeGame();
});

function initializeGame() {
    gameSeconds = 0;
    gameScore = 0;
    gameScoreElement.innerHTML = `Score: ${gameScore}`;
    gameMessageElement.classList.remove('visible');
    gameAreaContainer.innerHTML = ''; // Clear any existing bugs

    gameTimerInterval = setInterval(updateGameTime, 1000);
    bugSpawnInterval = setInterval(createBug, 1000); // Spawn a bug every second

    // Stop game after duration
    setTimeout(() => {
        clearInterval(gameTimerInterval);
        clearInterval(bugSpawnInterval);
        gameMessageElement.innerHTML = `Game Over! Your score: ${gameScore}`; // Customize end message
        gameMessageElement.classList.add('visible');
    }, gameDuration * 1000);
}

function resetGame() {
    clearInterval(gameTimerInterval);
    clearInterval(bugSpawnInterval);
    gameScreens[2].classList.remove('up'); // Go back to choose insect screen
    gameScreens[1].classList.remove('up'); // Go back to start screen
}

function updateGameTime() {
    gameSeconds++;
    let m = Math.floor(gameSeconds / 60);
    let s = gameSeconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    gameTimeElement.innerHTML = `Time: ${m}:${s}`;
}

function createBug() {
    const bug = document.createElement('div');
    bug.classList.add('bug');
    const { x, y } = getRandomCoordinates();
    bug.style.top = `${y}px`;
    bug.style.left = `${x}px`;
    bug.innerHTML = `<img src="${selectedBug.src}" alt="${selectedBug.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    bug.addEventListener('click', catchBug);

    gameAreaContainer.appendChild(bug);
}

function getRandomCoordinates() {
    const width = gameAreaContainer.offsetWidth;
    const height = gameAreaContainer.offsetHeight;
    const x = Math.random() * (width - 100) + 50; // Ensure bug is within bounds
    const y = Math.random() * (height - 100) + 50;
    return { x, y };
}

function catchBug() {
    gameScore++;
    gameScoreElement.innerHTML = `Score: ${gameScore}`;
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000); // Remove bug after animation
}
