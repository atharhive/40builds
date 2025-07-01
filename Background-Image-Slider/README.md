# Dynamic Background Slider

This project implements a dynamic background image slider that cycles through a series of images. It features navigation arrows for manual control and an automatic slideshow mode.

## Features

*   **Automatic Slideshow:** The background images automatically change every 5 seconds.
*   **Manual Navigation:** Users can navigate through images using left and right arrow buttons.
*   **Smooth Transitions:** Images transition smoothly, providing a pleasant user experience.
*   **Modern Design:** The slider features a clean, minimalist design with subtle styling.

## Code Explained

### HTML (`index.html`)

The HTML structure defines the slider container and its elements:

*   `<div class="slider-container">`: The main container for the slider.
*   `<div class="slide">`: Each image slide is represented by this div. The `background-image` is set inline using `url()`.
*   `<button class="arrow left-arrow">` and `<button class="arrow right-arrow">`: These are the navigation buttons for moving between slides. They use Font Awesome icons for the arrows.

### CSS (`css/style.css`)

The CSS styles the slider and its components:

*   **Body Styling:** Sets the `body` to `display: flex` to center the content. It also applies `background-position` and `background-size` for the background images and a `transition` for smooth changes.
*   **Slider Container (`.slider-container`):** Defines the dimensions, shadow, and `overflow: hidden` to contain the slides.
*   **Slides (`.slide`):** Each slide is absolutely positioned and covers the entire viewport. `opacity` is used for fading in and out, and `transition` ensures smooth visual changes. The `active` class makes a slide visible.
*   **Arrows (`.arrow`):** Styles the navigation buttons, including their position, size, and appearance. They have a semi-transparent dark blue-grey background and a red border.

### JavaScript (`js/script.js`)

The JavaScript controls the slider's functionality:

*   **Element Selection:** Selects the `body`, all `slide` elements, and the left/right arrow buttons.
*   **`currentActiveSlide`:** A variable to keep track of the currently active slide's index.
*   **`autoSlideInterval`:** A variable to store the `setInterval` ID for the automatic slideshow.
*   **`updateBackgroundAndSlide()`:** This function updates the `body`'s background image to match the current active slide and sets the `active` class on the correct slide while removing it from others.
*   **`nextSlide()`:** Increments `currentActiveSlide`. If it goes beyond the last slide, it wraps around to the first slide. Then calls `updateBackgroundAndSlide()`.
*   **`prevSlide()`:** Decrements `currentActiveSlide`. If it goes below the first slide, it wraps around to the last slide. Then calls `updateBackgroundAndSlide()`.
*   **`startAutoSlide()`:** Sets up a `setInterval` to call `nextSlide()` every 5000 milliseconds (5 seconds), enabling the automatic slideshow.
*   **`resetAutoSlide()`:** Clears the existing `autoSlideInterval` and then calls `startAutoSlide()` to reset the timer. This is called when a user manually clicks an arrow, ensuring the auto-slide doesn't immediately jump to the next image.
*   **Event Listeners:** Event listeners are added to the `leftArrowButton` and `rightArrowButton` to call `prevSlide()` and `nextSlide()` respectively, and then `resetAutoSlide()`.
*   **Initial Calls:** `updateBackgroundAndSlide()` is called once when the script loads to set the initial background, and `startAutoSlide()` is called to begin the automatic slideshow.
