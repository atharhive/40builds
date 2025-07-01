const progressLine = document.getElementById('progressLine');
const previousStepButton = document.getElementById('previousStepBtn');
const nextStepButton = document.getElementById('nextStepBtn');
const resetProgressButton = document.getElementById('resetProgressBtn');
const stepCircles = document.querySelectorAll('.step-circle');

let currentActiveStep = 1;

function updateProgressBar() {
    stepCircles.forEach((circle, idx) => {
        if (idx < currentActiveStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.step-circle.active');
    progressLine.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + '%';

    if (currentActiveStep === 1) {
        previousStepButton.disabled = true;
    } else if (currentActiveStep === stepCircles.length) {
        nextStepButton.disabled = true;
    } else {
        previousStepButton.disabled = false;
        nextStepButton.disabled = false;
    }
}

previousStepButton.addEventListener('click', () => {
    currentActiveStep--;
    if (currentActiveStep < 1) {
        currentActiveStep = 1;
    }
    updateProgressBar();
});

nextStepButton.addEventListener('click', () => {
    currentActiveStep++;
    if (currentActiveStep > stepCircles.length) {
        currentActiveStep = stepCircles.length;
    }
    updateProgressBar();
});

resetProgressButton.addEventListener('click', () => {
    currentActiveStep = 1;
    updateProgressBar();
});

// New Feature: Jump to step on circle click
stepCircles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        currentActiveStep = idx + 1;
        updateProgressBar();
    });
});

// Initial update
updateProgressBar();
