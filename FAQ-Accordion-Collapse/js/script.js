const faqToggles = document.querySelectorAll('.faq-toggle');
const faqItems = document.querySelectorAll('.faq');

faqToggles.forEach(toggleButton => {
    toggleButton.addEventListener('click', () => {
        const parentFaqItem = toggleButton.parentNode;

        // Close all other open FAQ items
        faqItems.forEach(item => {
            if (item !== parentFaqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });

        // Toggle the clicked FAQ item
        parentFaqItem.classList.toggle('active');
    });
});
