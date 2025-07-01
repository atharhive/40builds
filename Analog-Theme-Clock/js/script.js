const hourNeedle = document.querySelector('.hour-needle');
const minuteNeedle = document.querySelector('.minute-needle');
const secondNeedle = document.querySelector('.second-needle');
const digitalTimeDisplay = document.querySelector('.digital-time');
const currentDateDisplay = document.querySelector('.current-date');
const themeToggleButton = document.querySelector('.theme-toggle-btn');
const formatToggleButton = document.querySelector('.format-toggle-btn');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let is24HourFormat = false; // New feature: Toggle 24-hour format

themeToggleButton.addEventListener('click', (e) => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        e.target.innerHTML = 'Toggle Light Mode';
    } else {
        e.target.innerHTML = 'Toggle Dark Mode';
    }
});

formatToggleButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    updateClockDisplay(); // Update immediately after toggling
    if (is24HourFormat) {
        formatToggleButton.textContent = 'Toggle 12-Hour Format';
    } else {
        formatToggleButton.textContent = 'Toggle 24-Hour Format';
    }
});

function updateClockDisplay() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDay();
    const date = now.getDate();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hoursForAnalogClock = hours >= 13 ? hours % 12 : hours;

    // Rotate needles
    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForAnalogClock, 0, 12, 0, 360)}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    // Update digital time
    let displayHours = hours;
    if (!is24HourFormat) {
        displayHours = hoursForAnalogClock === 0 ? 12 : hoursForAnalogClock; // Handle 12 AM/PM
    }
    digitalTimeDisplay.innerHTML = `${displayHours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${is24HourFormat ? '' : ampm}`;

    // Update date display (New Feature: Full day and month name)
    currentDateDisplay.innerHTML = `${daysOfWeek[day]}, ${monthNames[month]} <span class="date-day-circle">${date}</span>`;
}

// Helper function to scale a number range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

// Initial call and set interval
updateClockDisplay();
setInterval(updateClockDisplay, 1000);