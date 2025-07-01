const userPasswordInput = document.getElementById('userPassword');
const backgroundBlurArea = document.getElementById('backgroundBlurArea');

// New Feature: Display password strength message
const passwordStrengthMessage = document.createElement('p');
passwordStrengthMessage.id = 'passwordStrengthMessage';
passwordStrengthMessage.style.marginTop = '10px';
passwordStrengthMessage.style.fontWeight = 'bold';
passwordStrengthMessage.style.color = '#e74c3c'; // Default to red
document.querySelector('.login-card').appendChild(passwordStrengthMessage);

userPasswordInput.addEventListener('input', (e) => {
  const password = e.target.value;
  const passwordLength = password.length;
  const maxBlur = 20;
  const minBlur = 0;

  // Calculate blur based on password length
  // Longer password = less blur (stronger)
  const blurAmount = maxBlur - (passwordLength * 2); // Adjust multiplier for desired effect
  backgroundBlurArea.style.filter = `blur(${Math.max(minBlur, blurAmount)}px)`;

  // Update password strength message
  updatePasswordStrengthMessage(password);
});

function updatePasswordStrengthMessage(password) {
    let strength = 'Weak';
    let color = '#e74c3c'; // Red

    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = 'Very Strong';
        color = '#2ecc71'; // Green
    } else if (password.length >= 6 && (/[A-Z]/.test(password) || /[a-z]/.test(password)) && /[0-9]/.test(password)) {
        strength = 'Moderate';
        color = '#f1c40f'; // Yellow
    } else if (password.length >= 4) {
        strength = 'Fair';
        color = '#e67e22'; // Orange
    }

    passwordStrengthMessage.textContent = `Strength: ${strength}`;
    passwordStrengthMessage.style.color = color;

    if (password.length === 0) {
        passwordStrengthMessage.textContent = ''; // Clear message if input is empty
    }
}