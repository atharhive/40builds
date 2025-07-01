const mainNavbar = document.querySelector('.main-navbar');
const scrollToTopButton = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    // Toggle 'scrolled' class on navbar
    if (window.scrollY > mainNavbar.offsetHeight + 50) { // Adjusted threshold
        mainNavbar.classList.add('scrolled');
    } else {
        mainNavbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
