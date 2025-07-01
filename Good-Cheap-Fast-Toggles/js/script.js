const allToggles = document.querySelectorAll('.toggle');
const qualityToggle = document.querySelector('#quality');
const costEffectiveToggle = document.querySelector('#costEffective');
const speedToggle = document.querySelector('#speed');
const reliableToggle = document.querySelector('#reliable');

// Ensure at least two toggles are active initially
function ensureMinimumActive() {
    const activeToggles = Array.from(allToggles).filter(toggle => toggle.checked);
    if (activeToggles.length < 2) {
        // If less than 2 are active, activate the first two by default
        if (!qualityToggle.checked) qualityToggle.checked = true;
        if (!costEffectiveToggle.checked) costEffectiveToggle.checked = true;
        updateToggleStates();
    }
}

allToggles.forEach(toggle => toggle.addEventListener('change', updateToggleStates));

function updateToggleStates() {
    const activeToggles = Array.from(allToggles).filter(toggle => toggle.checked);

    if (activeToggles.length > 2) {
        // If more than two are active, and a new one was just checked, deactivate the oldest one
        // This is a simplified logic, could be more complex based on specific rules
        if (qualityToggle.checked && costEffectiveToggle.checked && speedToggle.checked && reliableToggle.checked) {
            // If all are checked, and one was just clicked, uncheck the one that was NOT clicked
            // This logic needs to be smarter to identify the 'oldest' or least recently clicked
            // For simplicity, let's just uncheck the first one if all are checked
            if (qualityToggle.checked && this !== qualityToggle) {
                qualityToggle.checked = false;
            } else if (costEffectiveToggle.checked && this !== costEffectiveToggle) {
                costEffectiveToggle.checked = false;
            } else if (speedToggle.checked && this !== speedToggle) {
                speedToggle.checked = false;
            } else if (reliableToggle.checked && this !== reliableToggle) {
                reliableToggle.checked = false;
            }
        }
    }

    // Ensure at least two are always active (new feature)
    const currentlyActive = Array.from(allToggles).filter(toggle => toggle.checked);
    if (currentlyActive.length < 2) {
        // Find an unchecked toggle and activate it
        const uncheckedToggle = Array.from(allToggles).find(toggle => !toggle.checked);
        if (uncheckedToggle) {
            uncheckedToggle.checked = true;
        }
    }
}

// Initial check to ensure minimum active toggles
ensureMinimumActive();
