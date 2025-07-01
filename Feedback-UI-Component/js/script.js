const feedbackRatings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const submitButton = document.querySelector('#submitFeedback');
const feedbackPanel = document.querySelector('#panel');

let selectedRating = 'Satisfied'; // Default selected rating

// Function to remove 'active' class from all ratings
function deactivateAllRatings() {
    feedbackRatings.forEach(rating => rating.classList.remove('active'));
}

// Event listener for rating selection
ratingsContainer.addEventListener('click', (e) => {
    const clickedRating = e.target.closest('.rating');
    if (clickedRating) {
        deactivateAllRatings();
        clickedRating.classList.add('active');
        selectedRating = clickedRating.querySelector('small').textContent;
    }
});

// Event listener for feedback submission
submitButton.addEventListener('click', () => {
    feedbackPanel.innerHTML = `
        <div class="thank-you-message">
            <svg class="emoji" viewBox="0 0 24 24" style="width: 60px; height: 60px; fill: #2ecc71;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 16c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"/></svg>
            <strong>Thank You!</strong>
            <br>
            <span>Your feedback: <strong>${selectedRating}</strong></span>
            <p>We appreciate your input and will use it to improve our services.</p>
        </div>
    `;
});

// Set initial active rating
feedbackRatings[2].classList.add('active');