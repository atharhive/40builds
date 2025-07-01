const imagePanels = document.querySelectorAll('.panel');
let autoCycleInterval;

function deactivateAllPanels() {
    imagePanels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function activatePanel(panelToActivate) {
    deactivateAllPanels();
    panelToActivate.classList.add('active');
}

imagePanels.forEach(panel => {
    panel.addEventListener('click', () => {
        activatePanel(panel);
        resetAutoCycle();
    });
});

// New Feature: Auto-cycle through panels
function startAutoCycle() {
    let currentIndex = 0;
    autoCycleInterval = setInterval(() => {
        activatePanel(imagePanels[currentIndex]);
        currentIndex = (currentIndex + 1) % imagePanels.length;
    }, 5000); // Change panel every 5 seconds
}

function resetAutoCycle() {
    clearInterval(autoCycleInterval);
    startAutoCycle();
}

// Initial activation and start auto-cycle
activatePanel(imagePanels[0]);
startAutoCycle();
