const animatedBoxes = document.querySelectorAll('.animated-box');
const resetAnimationsButton = document.getElementById('resetAnimationsBtn');

// New Feature: Animation style selection (for simplicity, using a global variable)
let currentAnimationStyle = 'slide'; // 'slide' or 'fade'

// Function to apply animation style
function applyAnimationStyle() {
    animatedBoxes.forEach(box => {
        box.classList.remove('slide-in', 'fade-in'); // Remove previous styles
        if (currentAnimationStyle === 'slide') {
            box.classList.add('slide-in');
        } else if (currentAnimationStyle === 'fade') {
            box.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', checkAnimatedBoxes);

function checkAnimatedBoxes() {
    const triggerPoint = window.innerHeight / 5 * 4;

    animatedBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

resetAnimationsButton.addEventListener('click', () => {
    animatedBoxes.forEach(box => {
        box.classList.remove('show');
    });
    // Optionally, you could add a small delay before re-checking to make the reset visible
    setTimeout(checkAnimatedBoxes, 100);
});

// Initial check and apply animation style
checkAnimatedBoxes();
applyAnimationStyle();

// Example of how to change animation style (can be triggered by a UI element)
// For now, this is just a demonstration. You could add buttons for 'slide' and 'fade'.
// setTimeout(() => {
//     currentAnimationStyle = 'fade';
//     applyAnimationStyle();
//     checkAnimatedBoxes(); // Re-check to apply new style immediately
// }, 5000);
