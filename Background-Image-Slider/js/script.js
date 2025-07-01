const mainBody = document.body;
const imageSlides = document.querySelectorAll('.slide');
const leftArrowButton = document.getElementById('left');
const rightArrowButton = document.getElementById('right');

let currentActiveSlide = 0;
let autoSlideInterval;

function updateBackgroundAndSlide() {
  mainBody.style.backgroundImage = imageSlides[currentActiveSlide].style.backgroundImage;
  imageSlides.forEach((slide) => slide.classList.remove('active'));
  imageSlides[currentActiveSlide].classList.add('active');
}

function nextSlide() {
  currentActiveSlide++;
  if (currentActiveSlide > imageSlides.length - 1) {
    currentActiveSlide = 0;
  }
  updateBackgroundAndSlide();
}

function prevSlide() {
  currentActiveSlide--;
  if (currentActiveSlide < 0) {
    currentActiveSlide = imageSlides.length - 1;
  }
  updateBackgroundAndSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

rightArrowButton.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

leftArrowButton.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Initial setup
updateBackgroundAndSlide();
startAutoSlide();