# Daily Water Intake Tracker

This project is a simple web application to help users track their daily water intake. It visually represents the amount of water consumed against a daily goal, providing a clear and engaging way to monitor hydration.

## Features

*   **Visual Progress:** A large cup visually fills up as the user tracks their water intake.
*   **Interactive Glasses:** Clickable small glasses allow users to easily add to their daily count.
*   **Percentage Display:** Shows the percentage of the daily goal achieved.
*   **Remaining Goal:** Clearly indicates how many glasses are left to reach the daily target.
*   **Persistent Progress (New Feature):** Your water intake progress is now saved in your browser's local storage, so it persists even if you close and reopen the tab.

## Code Explained

### HTML (`index.html`)

The HTML sets up the main structure of the tracker:

*   `<h1>` and `<h3>`: Display the title and the daily goal (8 Glasses).
*   `<div class="cup">`: The large main cup that visually fills up.
    *   `<div class="remained">`: Displays the remaining glasses to reach the goal.
    *   `<div class="percentage">`: Shows the percentage of water consumed.
*   `<p class="text">`: Instructions for the user.
*   `<div class="cups">`: Contains 8 small clickable cups, each representing one glass of water.

### CSS (`css/style.css`)

The CSS styles the cups, text, and handles the filling animation:

*   **Body Styling:** Sets a dark blue-grey background, light grey text, and uses the 'Montserrat' font.
*   **Main Cup (`.cup`):** Styled as a large white cup with a green border and a subtle shadow. It uses `overflow: hidden` to allow the `percentage` div to fill it from the bottom.
*   **Small Cups (`.cup.cup-small`):** Styled as smaller white cups with green borders. When the `full` class is added (via JavaScript), their background changes to a lighter green and text color to white.
*   **`remained` and `percentage` Divs:** These are positioned within the main cup. The `percentage` div's `height` is dynamically controlled by JavaScript to create the filling effect. Their `visibility` is also toggled.
*   **Variables:** CSS custom properties (`--border-color` and `--fill-color`) are used for easy color management.

### JavaScript (`js/script.js`)

The JavaScript handles the logic for tracking water intake and updating the UI:

*   **Element Selection:** Selects all small cups, the remaining glasses span, the percentage filled div, and the remained container.
*   **Constants:** `TOTAL_GLASSES` (8) and `GLASS_VOLUME_ML` (250) are defined for clarity and easy modification.
*   **Local Storage Integration (New Feature):**
    *   `filledGlasses`: This variable now gets its initial value from `localStorage.getItem('filledGlasses')`. If no value is found, it defaults to 0.
    *   `localStorage.setItem('filledGlasses', filledGlasses);`: After every update to `filledGlasses`, its value is saved to local storage, ensuring persistence across sessions.
*   **`updateBigCup()` Function:**
    *   Calculates the `fullCups` (number of small cups with the `full` class).
    *   Updates the `percentageFilledDiv`'s height and text based on `fullCups` to visually fill the large cup.
    *   Updates the `remainedContainer`'s visibility and `glassesRemainingSpan`'s text to show how many glasses are left.
*   **`highlightCups(idx)` Function:**
    *   This function is called when a small cup is clicked. It determines which cups should be marked as `full` based on the clicked cup's index.
    *   It handles edge cases for clicking the last cup or un-clicking a cup.
    *   It then iterates through all small cups, adding or removing the `full` class as appropriate.
    *   Crucially, it updates `filledGlasses` and saves it to local storage, then calls `updateBigCup()` to refresh the UI.
*   **Event Listeners:** Each small cup has a `click` event listener that calls `highlightCups()` with its index.
*   **Initial Calls:** `updateBigCup()` and `highlightCups()` are called on script load to initialize the UI based on any saved progress.
