# Simple Drawing Application

This project provides a basic web-based drawing application where users can draw on a canvas using a customizable brush. It includes controls for brush size, color, clearing the canvas, and saving the drawing.

## Features

*   **Interactive Canvas:** Draw freely on a large canvas area.
*   **Adjustable Brush Size:** Increase or decrease the brush size using dedicated buttons.
*   **Color Picker:** Select any drawing color using an integrated color input.
*   **Clear Canvas:** A button to instantly clear all drawings from the canvas.
*   **Save Drawing (New Feature):** Users can now save their creations as a PNG image.

## Code Explained

### HTML (`index.html`)

The HTML sets up the canvas and the control panel:

*   `<h1>`: A title for the application.
*   `<canvas id="drawingCanvas" width="800" height="700"></canvas>`: The main drawing area. The `width` and `height` attributes define its dimensions.
*   `<div class="controls">`: A container for all the drawing tools.
*   `<button id="decreaseSize">` and `<button id="increaseSize">`: Buttons to adjust the brush size.
*   `<span id="currentSize">`: Displays the current brush size.
*   `<input type="color" id="drawingColor">`: A color input for selecting the drawing color.
*   `<button id="clearCanvas">`: Clears the canvas.
*   `<button id="saveCanvas">`: Saves the current drawing as an image.

### CSS (`css/style.css`)

The CSS styles the application's layout and controls:

*   **Body Styling:** Sets a light blue-grey background, centers the content, and uses a dark text color.
*   **Canvas Styling:** Adds a blue border, white background, and a subtle box shadow to the canvas.
*   **Controls (`.controls`):** Styles the toolbox container with a dark blue-grey background, padding, rounded corners, and a flex display to arrange its items.
*   **Control Buttons (`.controls > *`):** Styles the buttons with a blue background, white text, and a hover effect. They are set to `display: inline-flex` to center their content.
*   **Color Input Styling:** Customizes the appearance of the color input to blend with the overall design.

### JavaScript (`js/script.js`)

The JavaScript handles all the drawing logic and user interactions:

*   **Element Selection:** Selects the canvas, all control buttons, the size display, and the color input.
*   **Canvas Context (`ctx`):** Gets the 2D rendering context of the canvas, which is used for drawing operations.
*   **State Variables:** `brushSize`, `isDrawing` (boolean to track if the mouse is down and drawing), `currentColor`, `lastX`, `lastY` (to store the previous mouse coordinates for drawing lines).
*   **Event Listeners:**
    *   `drawingCanvas`: `mousedown` (starts drawing), `mouseup` (stops drawing), `mousemove` (draws while mouse is down).
    *   `increaseSizeBtn`, `decreaseSizeBtn`: Adjust `brushSize` and update the display.
    *   `drawingColorInput`: Updates `currentColor` when the color changes.
    *   `clearCanvasBtn`: Clears the entire canvas using `ctx.clearRect()`.
    *   `saveCanvasBtn` (New Feature): Converts the canvas content to a data URL (`toDataURL('image/png')`), creates a temporary `<a>` element, sets its `download` attribute and `href` to the data URL, simulates a click to trigger the download, and then removes the link.
*   **`drawCircle(x, y)` Function:** Draws a circle at the given coordinates with the current `brushSize` and `currentColor`. This is used for the initial dot when drawing begins.
*   **`drawLine(x1, y1, x2, y2)` Function:** Draws a line from `(x1, y1)` to `(x2, y2)` with the current `currentColor` and `brushSize`. `ctx.lineCap = 'round'` ensures smooth line endings.
*   **`updateSizeDisplay()` Function:** Updates the text content of `currentSizeSpan` to reflect the current `brushSize`.
