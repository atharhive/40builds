const smallGlassCups = document.querySelectorAll('.cup-small');
const glassesRemainingSpan = document.getElementById('glassesRemaining');
const percentageFilledDiv = document.getElementById('percentage');
const remainedContainer = document.getElementById('remained');

const TOTAL_GLASSES = 8;
const GLASS_VOLUME_ML = 250; // 250ml per glass

// Add a reset button for user convenience
if (!document.getElementById('resetBtn')) {
    const resetBtn = document.createElement('button');
    resetBtn.id = 'resetBtn';
    resetBtn.innerText = 'Reset';
    resetBtn.style.margin = '16px 0 0 0';
    resetBtn.style.padding = '8px 18px';
    resetBtn.style.background = '#1976d2';
    resetBtn.style.color = '#fff';
    resetBtn.style.border = 'none';
    resetBtn.style.borderRadius = '6px';
    resetBtn.style.cursor = 'pointer';
    resetBtn.style.fontWeight = 'bold';
    document.body.insertBefore(resetBtn, document.querySelector('.cups'));
    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('filledGlasses');
        highlightCups(-1);
    });
}

// Load saved progress on startup
let filledGlasses = localStorage.getItem('filledGlasses') ? parseInt(localStorage.getItem('filledGlasses')) : 0;
highlightCups(filledGlasses - 1);

smallGlassCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => handleCupClick(idx));
});

function handleCupClick(idx) {
    // If clicking a filled cup and it's the last one, unfill it
    if (smallGlassCups[idx].classList.contains('full') &&
        (idx === TOTAL_GLASSES - 1 || !smallGlassCups[idx + 1].classList.contains('full'))) {
        idx--;
    }
    highlightCups(idx);
}

function highlightCups(idx) {
    smallGlassCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    filledGlasses = document.querySelectorAll('.cup-small.full').length;
    localStorage.setItem('filledGlasses', filledGlasses);
    updateBigCup();
}

function updateBigCup() {
    // Always show percentage, even if 0%
    percentageFilledDiv.style.visibility = 'visible';
    percentageFilledDiv.style.height = `${(filledGlasses / TOTAL_GLASSES) * 330}px`;
    percentageFilledDiv.innerText = `${Math.round((filledGlasses / TOTAL_GLASSES) * 100)}%`;

    if (filledGlasses === 0) {
        percentageFilledDiv.innerText = '0%';
    }

    if (filledGlasses === TOTAL_GLASSES) {
        remainedContainer.style.visibility = 'visible';
        glassesRemainingSpan.innerText = 'Goal reached!';
        glassesRemainingSpan.style.color = '#1976d2';
        remainedContainer.querySelector('small').innerText = 'Great job!';
    } else {
        remainedContainer.style.visibility = 'visible';
        const remainingGlasses = TOTAL_GLASSES - filledGlasses;
        glassesRemainingSpan.innerText = `${remainingGlasses} Glass${remainingGlasses === 1 ? '' : 'es'}`;
        glassesRemainingSpan.style.color = '';
        remainedContainer.querySelector('small').innerText = 'Remaining';
    }
}