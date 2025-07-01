const testimonialTextElement = document.querySelector('.testimonial-text');
const userAvatarElement = document.querySelector('.user-avatar');
const userNameElement = document.querySelector('.user-name');
const userRoleElement = document.querySelector('.user-role');
const progressBar = document.querySelector('.progress-indicator');

const testimonialsData = [
  {
    name: 'Alice Johnson',
    role: 'Marketing Specialist',
    photo:
      'https://picsum.photos/id/1005/100/100',
    text:
      "Working with this team has been an absolute pleasure. Their dedication to quality and innovative solutions truly sets them apart. Highly recommend their services!",
  },
  {
    name: 'Bob Williams',
    role: 'Software Engineer',
    photo: 'https://picsum.photos/id/1011/100/100',
    text:
      'The technical expertise and collaborative spirit of this group are outstanding. They consistently deliver high-quality results and are a joy to work with.',
  },
  {
    name: 'Carol Davis',
    role: 'Project Manager',
    photo: 'https://picsum.photos/id/1012/100/100',
    text:
      "From concept to execution, their professionalism and attention to detail were impeccable. They exceeded our expectations and delivered a fantastic product.",
  },
  {
    name: 'David Brown',
    role: 'UX Designer',
    photo: 'https://picsum.photos/id/1025/100/100',
    text:
      "Their understanding of user experience is phenomenal. The designs are intuitive, beautiful, and truly enhance the overall product. A real asset to any project.",
  },
  {
    name: 'Eve Green',
    role: 'Business Analyst',
    photo: 'https://picsum.photos/id/1027/100/100',
    text:
      "The insights provided were invaluable. They helped us identify key areas for improvement and streamline our processes, leading to significant growth.",
  },
];

let currentTestimonialIndex = 0;
let autoSwitchInterval;

function updateTestimonial() {
  const { name, role, photo, text } = testimonialsData[currentTestimonialIndex];

  testimonialTextElement.innerHTML = text;
  userAvatarElement.src = photo;
  userNameElement.innerHTML = name;
  userRoleElement.innerHTML = role;

  // Reset and restart progress bar animation
  progressBar.style.animation = 'none';
  void progressBar.offsetWidth; // Trigger reflow
  progressBar.style.animation = null;
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        currentTestimonialIndex++;
        if (currentTestimonialIndex > testimonialsData.length - 1) {
            currentTestimonialIndex = 0;
        }
        updateTestimonial();
    }, 10000); // Switch every 10 seconds
}

function resetAutoSwitch() {
    clearInterval(autoSwitchInterval);
    startAutoSwitch();
}

// New Feature: Manual navigation buttons
const navButtonsContainer = document.createElement('div');
navButtonsContainer.classList.add('testimonial-nav-buttons');
navButtonsContainer.style.marginTop = '20px';
navButtonsContainer.style.display = 'flex';
navButtonsContainer.style.justifyContent = 'center';
navButtonsContainer.style.gap = '10px';

const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.classList.add('nav-button');
prevButton.style.padding = '8px 15px';
prevButton.style.border = 'none';
prevButton.style.borderRadius = '5px';
prevButton.style.backgroundColor = '#3498db';
prevButton.style.color = 'white';
prevButton.style.cursor = 'pointer';
prevButton.style.transition = 'background-color 0.3s ease';
prevButton.addEventListener('click', () => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonialsData.length - 1;
    }
    updateTestimonial();
    resetAutoSwitch();
});

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('nav-button');
nextButton.style.padding = '8px 15px';
nextButton.style.border = 'none';
nextButton.style.borderRadius = '5px';
nextButton.style.backgroundColor = '#3498db';
nextButton.style.color = 'white';
nextButton.style.cursor = 'pointer';
nextButton.style.transition = 'background-color 0.3s ease';
nextButton.addEventListener('click', () => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex > testimonialsData.length - 1) {
        currentTestimonialIndex = 0;
    }
    updateTestimonial();
    resetAutoSwitch();
});

navButtonsContainer.appendChild(prevButton);
navButtonsContainer.appendChild(nextButton);
document.querySelector('.testimonial-carousel-container').appendChild(navButtonsContainer);

// Initial load and start auto-switch
updateTestimonial();
startAutoSwitch();