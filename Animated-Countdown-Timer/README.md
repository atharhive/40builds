# Animated Countdown Timer

This project is a visually engaging countdown timer that animates from 3 to 0, ending with a "Ready" message. It features a clean, modern design and a replay button to restart the animation.

## Features

*   **Animated Countdown:** The numbers animate in and out of view, creating a dynamic effect.
*   **Color Changing Background:** The background color changes with each number in the countdown, adding a visual flair.
*   **Modern Design:** The project uses a dark theme with contrasting colors for a sleek look.
*   **Replay Functionality:** A "Reset" button allows the user to restart the countdown animation.

## Code Explained

### HTML (`index.html`)

The HTML structure is simple and consists of two main containers:

*   `.counter`: This holds the numbers for the countdown. Each number is a `<span>` element within a `.nums` div.
*   `.final`: This container holds the final message ("Ready") and the "Reset" button. It is initially hidden.

The stylesheet and script are linked at the end of the body.

### CSS (`css/style.css`)

The CSS handles the styling and animations:

*   **Basic Styling:** The body is set to a dark blue-grey background with light grey text. The font is Roboto.
*   **Containers:** The `.counter` and `.final` containers are centered on the page using `position: fixed` and `transform: translate(-50%, -50%)`.
*   **Animations:**
    *   `@keyframes goIn`: This animation rotates the numbers into view.
    *   `@keyframes goOut`: This animation rotates the numbers out of view.
    *   `@keyframes show` and `@keyframes hide`: These animations control the visibility of the `.counter` and `.final` containers.
*   **Button Styling:** The "Reset" button has a red background that darkens on hover.

### JavaScript (`js/script.js`)

The JavaScript code controls the animation logic:

*   **Element Selection:** The script starts by selecting all the necessary DOM elements.
*   **`backgroundColors` Array:** This array holds the colors that the background will cycle through during the countdown.
*   **`resetAnimation()`:** This function resets the animation to its initial state. It removes the `hide` and `show` classes, resets the classes on the number elements, and sets the background color back to the default.
*   **`startAnimation()`:** This function is the core of the animation logic. It iterates through each number element and adds an `animationend` event listener. This listener checks the animation name and the element's index to determine the next step in the animation sequence. It also changes the background color based on the current number.
*   **Event Listener:** An event listener is added to the "Reset" button, which calls `resetAnimation()` and `startAnimation()` to restart the countdown.
*   **Initial Call:** `startAnimation()` is called at the end of the script to start the animation when the page loads.
