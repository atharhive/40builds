# Double Vertical Content Slider

This project features a unique double vertical content slider, where a text slide and an image slide move in opposite directions. It's ideal for showcasing content pairs, such as descriptions with corresponding visuals.

## Features

*   **Synchronized Vertical Scrolling:** Text and image slides move in tandem, but in opposite vertical directions.
*   **Automatic Slide Advancement:** The slider automatically transitions to the next slide every 5 seconds.
*   **Pause/Play Functionality:** A dedicated button allows users to pause and resume the automatic slide advancement.
*   **Clean and Modern Design:** The slider is styled with a minimalist aesthetic, focusing on content presentation.

## Code Explained

### HTML (`index.html`)

The HTML sets up the main slider structure:

*   `<div class="slider-container">`: The main wrapper for the entire slider.
*   `<div class="left-slide">`: Contains the text content for each slide. Each `div` inside represents a single text slide with a background color, `<h1>` for title, and `<p>` for description.
*   `<div class="right-slide">`: Contains the image content for each slide. Each `div` inside represents a single image slide with an inline `background-image` style.
*   `<div class="action-buttons">`: Holds the navigation buttons.
*   `<button class="down-button">` and `<button class="up-button">`: Buttons for manual navigation. They contain SVG icons for the arrows.

### CSS (`css/style.css`)

The CSS styles the slider and its components:

*   **Body Styling:** Sets a light background and uses the 'Open Sans' font.
*   **Slider Container (`.slider-container`):** Defines the full viewport width and height, with `overflow: hidden` to hide off-screen slides.
*   **Left Slide (`.left-slide`):** Occupies 35% of the width. Its `top` property is initially set to position the first slide correctly, and `transform` is used for vertical movement. Each inner `div` is styled with `display: flex` for centering content and `color: #ffffff` for white text.
*   **Right Slide (`.right-slide`):** Occupies 65% of the width and is positioned to the right of the left slide. Its `transform` is also used for vertical movement. Each inner `div` has `background-size: cover` and `background-position: center center` for the images.
*   **Action Buttons (`.action-buttons button`):** Styles the navigation buttons with a dark grey background, white icons, and a subtle hover effect. They are absolutely positioned and transformed to be centered vertically.

### JavaScript (`js/script.js`)

The JavaScript controls the slider's dynamic behavior:

*   **Element Selection:** Selects the main slider container, left and right slides, navigation buttons, and determines the total number of slides.
*   **`currentSlideIndex`:** Keeps track of the currently active slide.
*   **`autoSlideInterval`:** Stores the `setInterval` ID for the automatic slideshow.
*   **Initial `leftTextSlide` Position:** `leftTextSlide.style.top` is set to correctly align the first text slide with the first image slide.
*   **`navigateSlides(direction)` Function:**
    *   Calculates the `sliderHeight` to determine the translation distance.
    *   Updates `currentSlideIndex` based on the `direction` ('up' or 'down'), handling wrapping around to the beginning or end of the slides.
    *   Applies `transform: translateY()` to both `rightContentSlide` and `leftTextSlide` to move them vertically. Note that `leftTextSlide` moves in the opposite direction to `rightContentSlide`.
    *   Calls `resetAutoSlide()` to reset the automatic timer after a manual navigation.
*   **`startAutoSlide()` Function:** Sets up a `setInterval` to call `navigateSlides('up')` every 5 seconds, enabling the automatic slideshow.
*   **`resetAutoSlide()` Function:** Clears the existing `autoSlideInterval` and then calls `startAutoSlide()` to restart the timer. This ensures the auto-slide timer resets after any manual interaction.
*   **Event Listeners:** Event listeners are added to `upNavigationButton` and `downNavigationButton` to call `navigateSlides()` with the appropriate direction.
*   **Pause/Play Button (New Feature):**
    *   A new button (`pausePlayButton`) is dynamically created, styled, and appended to the `mainSliderContainer`.
    *   It contains an SVG icon that toggles between a play and pause symbol.
    *   An `isPlaying` boolean tracks the state of the auto-slide.
    *   When clicked, it either `clearInterval()` to pause the auto-slide or `startAutoSlide()` to resume it, and updates its icon and background color accordingly.
*   **Initial Call:** `startAutoSlide()` is called at the end of the script to begin the automatic slideshow when the page loads.
