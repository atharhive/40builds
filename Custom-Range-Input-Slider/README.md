# Custom Range Input Slider

This project creates a custom-styled range input slider with a dynamic value label that moves along the slider. It provides a more visually appealing and interactive experience than the default browser range input.

## Features

*   **Custom Styling:** The range slider is styled to match a modern, dark theme.
*   **Dynamic Value Label:** A label displays the current value of the slider and moves horizontally to stay aligned with the thumb.
*   **Percentage Display:** The label now also shows the current value as a percentage of the total range.
*   **Cross-Browser Compatibility:** Styles are applied to ensure consistent appearance across different browsers (Chrome, Safari, Firefox, IE).

## Code Explained

### HTML (`index.html`)

The HTML structure is straightforward:

*   `<h2>`: A heading for the slider.
*   `<div class="range-container">`: A container for the input and its label.
*   `<input type="range" id="range" min="0" max="100">`: The range input element. `min` and `max` attributes define the range of values.
*   `<label for="range">`: The label that displays the current value. It's associated with the input using the `for` attribute.

### CSS (`css/style.css`)

The CSS is responsible for the custom appearance and the label's positioning:

*   **Body Styling:** Sets a dark blue-grey background and uses the 'Lato' font.
*   **Range Container (`.range-container`):** Styles the container for the slider, giving it a slightly lighter background, padding, rounded corners, and a box shadow.
*   **Input Range (`input[type='range']`):**
    *   `-webkit-appearance: none;`: Removes the default browser styling.
    *   `background: transparent;`: Hides the default track.
*   **Label (`input[type='range'] + label`):** Styles the value label with a red background, light grey text, and a box shadow. Its `position: absolute` allows it to be moved dynamically by JavaScript.
*   **Slider Track Styling (`::-webkit-slider-runnable-track`, `::-moz-range-track`, `::-ms-track`):** These pseudo-elements are used to style the track of the slider for different browsers, giving it a red background and rounded corners.
*   **Slider Thumb Styling (`::-webkit-slider-thumb`, `::-moz-range-thumb`, `::-ms-thumb`):** These pseudo-elements style the draggable thumb of the slider, making it a white circle with a red border.

### JavaScript (`js/script.js`)

The JavaScript handles the dynamic behavior of the slider:

*   **Element Selection:** Selects the range input (`rangeInput`) and its associated label (`valueLabel`).
*   **`input` Event Listener:** An event listener is attached to the `rangeInput` that fires whenever the slider's value changes.
    *   Inside the listener, it calculates the `value`, `min`, and `max` of the slider.
    *   It retrieves the `width` of the range input and the `label` to accurately position the label.
    *   **`mapRange()` Function:** This helper function (inspired by Stack Overflow) maps a number from one range of values to another. It's used to calculate the `left` position of the label, ensuring it stays centered above the slider's thumb regardless of the thumb's position.
    *   `valueLabel.style.left = `${left}px`;`: Sets the calculated `left` position for the label.
    *   **Percentage Calculation:** Calculates the current value as a percentage of the total range.
    *   `valueLabel.innerHTML = `${value} (${percentage.toFixed(0)}%)`;`: Updates the label's text to show both the numerical value and its percentage.
