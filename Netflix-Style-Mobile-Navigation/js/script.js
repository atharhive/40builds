const openNavigationButton = document.querySelector('.open-btn');
const closeNavigationButton = document.querySelector('.close-btn');
const navigationOverlays = document.querySelectorAll('.nav-overlay');
const menuLinks = document.querySelectorAll('.menu-list a');

openNavigationButton.addEventListener('click', () => {
    navigationOverlays.forEach(navEl => navEl.classList.add('visible'));
});

closeNavigationButton.addEventListener('click', () => {
    navigationOverlays.forEach(navEl => navEl.classList.remove('visible'));
});

// New Feature: Close navigation when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigationOverlays.forEach(navEl => navEl.classList.remove('visible'));
    });
});
