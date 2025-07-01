const imageGalleryContainer = document.querySelector('.image-gallery-container');
const generateImagesButton = document.getElementById('generateImagesBtn');

const PICSUM_URL = 'https://picsum.photos/';
const DEFAULT_IMAGE_COUNT = 9; // Default number of images to generate

function getRandomImageSize() {
    const width = Math.floor(Math.random() * (400 - 300 + 1)) + 300; // Between 300 and 400
    const height = Math.floor(Math.random() * (300 - 200 + 1)) + 200; // Between 200 and 300
    return `${width}/${height}`;
}

function generateImages(count) {
    imageGalleryContainer.innerHTML = ''; // Clear existing images
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        // Using Picsum Photos with a random ID to get different images
        img.src = `${PICSUM_URL}id/${Math.floor(Math.random() * 1000)}/${getRandomImageSize()}`;
        img.alt = `Random Image ${i + 1}`;
        imageGalleryContainer.appendChild(img);
    }
}

generateImagesButton.addEventListener('click', () => {
    // New Feature: Allow user to specify number of images (via prompt for simplicity)
    let numImages = prompt('How many images would you like to generate? (1-20)', DEFAULT_IMAGE_COUNT);
    numImages = parseInt(numImages);

    if (isNaN(numImages) || numImages < 1 || numImages > 20) {
        alert('Please enter a valid number between 1 and 20.');
        numImages = DEFAULT_IMAGE_COUNT; // Fallback to default
    }
    generateImages(numImages);
});

// Initial image generation on page load
generateImages(DEFAULT_IMAGE_COUNT);
