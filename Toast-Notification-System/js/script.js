const notificationContainer = document.getElementById('notificationContainer');
const showSuccessButton = document.getElementById('showSuccessBtn');
const showErrorButton = document.getElementById('showErrorBtn');
const showInfoButton = document.getElementById('showInfoBtn');

const defaultMessages = {
    success: 'Operation completed successfully!',
    error: 'An error occurred. Please try again.',
    info: 'Here is some information.',
};

function createNotification(message, type) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('toast-message', type);
    notificationElement.innerText = message;

    // New Feature: Manual dismissal
    const dismissButton = document.createElement('span');
    dismissButton.innerText = 'x';
    dismissButton.style.marginLeft = '10px';
    dismissButton.style.cursor = 'pointer';
    dismissButton.style.fontWeight = 'bold';
    dismissButton.style.color = '#555';
    dismissButton.addEventListener('click', () => {
        notificationElement.classList.remove('show');
        notificationElement.addEventListener('transitionend', () => notificationElement.remove());
    });
    notificationElement.appendChild(dismissButton);

    notificationContainer.appendChild(notificationElement);

    // Trigger show animation
    setTimeout(() => {
        notificationElement.classList.add('show');
    }, 10);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        notificationElement.classList.remove('show');
        notificationElement.addEventListener('transitionend', () => notificationElement.remove());
    }, 3000);
}

showSuccessButton.addEventListener('click', () => createNotification(defaultMessages.success, 'success'));
showErrorButton.addEventListener('click', () => createNotification(defaultMessages.error, 'error'));
showInfoButton.addEventListener('click', () => createNotification(defaultMessages.info, 'info'));
