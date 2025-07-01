const openMenuButton = document.getElementById('openMenuBtn');
const closeMenuButton = document.getElementById('closeMenuBtn');
const mainWrapper = document.querySelector('.main-wrapper');

let inactivityTimer; // To store the timer for inactivity
const INACTIVITY_TIMEOUT = 5000; // 5 seconds of inactivity

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        mainWrapper.classList.remove('show-nav');
    }, INACTIVITY_TIMEOUT);
}

openMenuButton.addEventListener('click', () => {
    mainWrapper.classList.add('show-nav');
    resetInactivityTimer(); // Start timer when menu opens
});

closeMenuButton.addEventListener('click', () => {
    mainWrapper.classList.remove('show-nav');
    clearTimeout(inactivityTimer); // Clear timer when menu is manually closed
});

// Event listeners to reset timer on user activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);

// Initial call to start the timer (in case user doesn't interact immediately)
resetInactivityTimer();
