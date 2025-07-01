const imageDisplayArea = document.getElementById('imageDisplayArea');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const autoplayToggleButton = document.getElementById('autoplayToggleBtn');

const images = document.querySelectorAll('#imageDisplayArea img');

let currentImageIndex = 0;
let autoplayInterval;
let isAutoplayEnabled = true;

const IMAGE_WIDTH = 800; // Must match the width of the images in CSS

function updateImageDisplay() {
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    imageDisplayArea.style.transform = `translateX(${-currentImageIndex * IMAGE_WIDTH}px)`;
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentImageIndex++;
        updateImageDisplay();
    }, 3000); // Change image every 3 seconds
    autoplayToggleButton.textContent = 'Disable Autoplay';
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
    autoplayToggleButton.textContent = 'Enable Autoplay';
}

function resetAutoplay() {
    if (isAutoplayEnabled) {
        stopAutoplay();
        startAutoplay();
    }
}

prevButton.addEventListener('click', () => {
    currentImageIndex--;
    updateImageDisplay();
    resetAutoplay();
});

nextButton.addEventListener('click', () => {
    currentImageIndex++;
    updateImageDisplay();
    resetAutoplay();
});

autoplayToggleButton.addEventListener('click', () => {
    isAutoplayEnabled = !isAutoplayEnabled;
    if (isAutoplayEnabled) {
        startAutoplay();
    } else {
        stopAutoplay();
    }
});

// Initial setup
updateImageDisplay();
startAutoplay();