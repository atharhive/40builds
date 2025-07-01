const menuToggleButton = document.getElementById('toggle');
const navigationMenu = document.getElementById('nav');
const navLinks = navigationMenu.querySelectorAll('ul li a');

menuToggleButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
});

// Add hover effect to navigation links
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#e74c3c'; // Red on hover
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#ecf0f1'; // Original light grey
  });
});