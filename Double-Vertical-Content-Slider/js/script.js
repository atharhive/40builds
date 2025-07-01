const mainSliderContainer = document.querySelector('.slider-container');
const rightContentSlide = document.querySelector('.right-slide');
const leftTextSlide = document.querySelector('.left-slide');
const upNavigationButton = document.querySelector('.up-button');
const downNavigationButton = document.querySelector('.down-button');
const totalSlides = rightContentSlide.querySelectorAll('div').length;

let currentSlideIndex = 0;
let autoSlideInterval;

leftTextSlide.style.top = `-${(totalSlides - 1) * 100}vh`;

function navigateSlides(direction) {
    const sliderHeight = mainSliderContainer.clientHeight;
    if (direction === 'up') {
        currentSlideIndex++;
        if (currentSlideIndex > totalSlides - 1) {
            currentSlideIndex = 0;
        }
    } else if (direction === 'down') {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = totalSlides - 1;
        }
    }

    rightContentSlide.style.transform = `translateY(-${currentSlideIndex * sliderHeight}px)`;
    leftTextSlide.style.transform = `translateY(${currentSlideIndex * sliderHeight}px)`;
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => navigateSlides('up'), 5000); // Auto-advance every 5 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

upNavigationButton.addEventListener('click', () => navigateSlides('up'));
downNavigationButton.addEventListener('click', () => navigateSlides('down'));

// Add a pause/play button (new feature)
const pausePlayButton = document.createElement('button');
pausePlayButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-1.5S0 62.6 0 80V432c0 17.4 10.2 33.4 26.5 41.3s33.7 7.8 48.5-1.5L353.8 275.8c14.7-9 23.2-25.2 23.2-42.9s-8.5-33.9-23.2-42.9L73 39z"/></svg>'; // Play icon
pausePlayButton.classList.add('action-button');
pausePlayButton.style.position = 'absolute';
pausePlayButton.style.left = '50%';
pausePlayButton.style.bottom = '20px';
pausePlayButton.style.transform = 'translateX(-50%)';
pausePlayButton.style.backgroundColor = '#28a745'; // Green
pausePlayButton.style.borderRadius = '50%';
pausePlayButton.style.width = '50px';
pausePlayButton.style.height = '50px';
pausePlayButton.style.display = 'flex';
pausePlayButton.style.alignItems = 'center';
pausePlayButton.style.justifyContent = 'center';
pausePlayButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
pausePlayButton.style.zIndex = '101';

let isPlaying = true;

pausePlayButton.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(autoSlideInterval);
        pausePlayButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M272 0H48C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48H272c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 128h96V384H144V128z"/></svg>'; // Pause icon
        pausePlayButton.style.backgroundColor = '#dc3545'; // Red
    } else {
        startAutoSlide();
        pausePlayButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-1.5S0 62.6 0 80V432c0 17.4 10.2 33.4 26.5 41.3s33.7 7.8 48.5-1.5L353.8 275.8c14.7-9 23.2-25.2 23.2-42.9s-8.5-33.9-23.2-42.9L73 39z"/></svg>'; // Play icon
        pausePlayButton.style.backgroundColor = '#28a745'; // Green
    }
    isPlaying = !isPlaying;
});

mainSliderContainer.appendChild(pausePlayButton);

// Initial start
startAutoSlide();
