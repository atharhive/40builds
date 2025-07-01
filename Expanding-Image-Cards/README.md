# Dynamic Expanding Image Cards

This project showcases a set of image cards that expand to reveal more content when clicked. It features smooth transitions and a dynamic layout, making it an engaging way to display visual content. A new auto-cycling feature has been added for a hands-free browsing experience.

## Features

*   **Interactive Expansion:** Click on any card to expand it, making it the focal point while others shrink.
*   **Smooth Transitions:** Seamless visual transitions for a polished user experience.
*   **Auto-Cycling (New Feature):** The cards automatically cycle through and expand every 5 seconds, providing a dynamic slideshow.
*   **Responsive Design:** Adapts to different screen sizes, hiding some cards on smaller devices.
*   **Modern Aesthetic:** Clean design with subtle shadows and rounded corners.

## Code Explained

### HTML (`index.html`)

The HTML structure is simple, consisting of a container for the image panels:

*   `<div class="container">`: The main flex container that holds all the image panels.
*   `<div class="panel">`: Each `div` with the class `panel` represents an individual image card. The `background-image` is set inline using `url()`, and each panel has an `<h3>` tag for its title.

### CSS (`css/style.css`)

The CSS styles the panels and controls their expansion:

*   **Body Styling:** Centers the content on the page and sets a light grey background.
*   **Container (`.container`):** Uses `display: flex` to arrange the panels horizontally. The `width` is set to `90vw`.
*   **Panel (`.panel`):**
    *   `background-size: cover`, `background-position: center`, `background-repeat: no-repeat`: Ensures the background images fill the panel without distortion.
    *   `height: 80vh`, `border-radius: 20px`, `margin: 10px`: Defines the panel's dimensions, rounded corners, and spacing.
    *   `flex: 0.5`: Initially, all panels take up a small, equal portion of the available space.
    *   `position: relative`: Allows absolute positioning of the `<h3>` title within the panel.
    *   `transition: flex 0.7s ease-in`: This is crucial for the smooth expansion animation. When the `flex` property changes, it animates over 0.7 seconds.
    *   `box-shadow`: Adds a subtle shadow for depth.
*   **Panel Title (`.panel h3`):** Positioned at the bottom left of the panel. Initially `opacity: 0` to hide it.
*   **Active Panel (`.panel.active`):** When the `active` class is added:
    *   `flex: 5`: The active panel expands to take up a much larger portion of the available space.
    *   `opacity: 1` and `transition: opacity 0.3s ease-in 0.4s`: The title becomes visible with a slight delay, making it appear after the panel has started expanding.
*   **Media Queries:** Hides some panels on smaller screens to maintain responsiveness.

### JavaScript (`js/script.js`)

The JavaScript handles the interactivity and the new auto-cycling feature:

*   **Element Selection:** Selects all image panels (`imagePanels`).
*   **`autoCycleInterval`:** A variable to store the `setInterval` ID for the automatic slideshow.
*   **`deactivateAllPanels()` Function:** Iterates through all panels and removes the `active` class from each, effectively shrinking them.
*   **`activatePanel(panelToActivate)` Function:** Calls `deactivateAllPanels()` first, then adds the `active` class to the specified `panelToActivate`, causing it to expand.
*   **Click Event Listener:** Each `imagePanel` has a `click` event listener. When a panel is clicked, `activatePanel()` is called for that panel, and `resetAutoCycle()` is called to restart the auto-timer.
*   **`startAutoCycle()` Function (New Feature):**
    *   Initializes `currentIndex` to 0.
    *   Sets up a `setInterval` that calls `activatePanel()` for the current panel every 5000 milliseconds (5 seconds).
    *   Increments `currentIndex` and uses the modulo operator (`%`) to loop back to the beginning of the `imagePanels` array when it reaches the end.
*   **`resetAutoCycle()` Function:** Clears the existing `autoCycleInterval` and then calls `startAutoCycle()` to restart the timer. This is crucial to prevent multiple auto-cycle timers from running simultaneously and to reset the timer after a manual interaction.
*   **Initial Calls:** `activatePanel(imagePanels[0])` is called to set the first panel as active when the page loads, and `startAutoCycle()` is called to begin the automatic slideshow.
