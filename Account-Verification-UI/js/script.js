const codeDigits = document.querySelectorAll('.code-digit');
const resendCodeButton = document.getElementById('resendCodeBtn');

// Focus on the first input field on page load
codeDigits[0].focus();

codeDigits.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // If a number is entered, move to the next input
        if (e.key >= '0' && e.key <= '9') {
            codeDigits[idx].value = ''; // Clear current input before typing new digit
            setTimeout(() => {
                if (idx < codeDigits.length - 1) {
                    codeDigits[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // If backspace is pressed, move to the previous input
            setTimeout(() => {
                if (idx > 0) {
                    codeDigits[idx - 1].focus();
                }
            }, 10);
        }
    });

    // New Feature: Auto-submit when all digits are entered
    code.addEventListener('input', () => {
        const allFilled = Array.from(codeDigits).every(input => input.value.length === 1);
        if (allFilled) {
            const enteredCode = Array.from(codeDigits).map(input => input.value).join('');
            alert(`Verification Code Entered: ${enteredCode}\n(This is a demo, no actual verification occurs.)`);
            // You would typically send this code to a server for verification
        }
    });
});

resendCodeButton.addEventListener('click', () => {
    alert('Resend code functionality triggered!\n(In a real app, a new code would be sent.)');
    // Clear inputs and refocus first one
    codeDigits.forEach(input => input.value = '');
    codeDigits[0].focus();
});
