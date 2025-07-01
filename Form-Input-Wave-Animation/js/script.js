const formLabels = document.querySelectorAll('.form-control label');
const emailInput = document.querySelector('input[type="text"]');

formLabels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

// New Feature: Email validation
emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (emailRegex.test(email)) {
        emailInput.style.borderColor = '#2ecc71'; // Green for valid
    } else {
        emailInput.style.borderColor = '#e74c3c'; // Red for invalid
    }

    if (email === '') {
        emailInput.style.borderColor = '#ecf0f1'; // Reset to default if empty
    }
});
