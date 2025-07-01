# Interactive Drag and Drop

This project demonstrates a simple yet interactive drag-and-drop interface. Users can drag a draggable item and drop it into various designated drop zones. A reset button is included to return the draggable item to its original position.

## Features

*   **Draggable Item:** A visual element that can be picked up and moved.
*   **Multiple Drop Zones:** Several areas where the draggable item can be placed.
*   **Visual Feedback:** Drop zones change appearance when a draggable item hovers over them.
*   **Reset Functionality:** A button to easily return the draggable item to its starting point.
*   **Modern Styling:** Clean and intuitive design with a clear visual hierarchy.

## Code Explained

### HTML (`index.html`)

The HTML sets up the main structure:

*   `<h1>`: A title for the application.
*   `<div class="container">`: A flex container to hold the drop zones.
*   `<div class="empty">`: Represents a drop zone. The first one initially contains the draggable item.
*   `<div class="fill" draggable="true">`: The draggable item itself. The `draggable="true"` attribute makes it draggable.
*   `<button id="resetBtn">`: The button to reset the layout.

### CSS (`css/style.css`)

The CSS styles the elements and provides visual feedback:

*   **Body Styling:** Sets a dark blue-grey background, centers content, and uses light grey text.
*   **Container (`.container`):** Uses flexbox to arrange the drop zones.
*   **Empty Drop Zones (`.empty`):** Styled with a blue border, light grey background, and rounded corners. They are also flex containers to center their content.
*   **Fill Item (`.fill`):** The draggable item, styled with a placeholder image, rounded corners, and a `cursor: grab` to indicate its draggable nature.
*   **`hold` Class:** Applied to the draggable item when it's being dragged, adding a red border.
*   **`invisible` Class:** Temporarily applied to the draggable item during the drag operation to make it disappear from its original spot.
*   **`hovered` Class:** Applied to a drop zone when a draggable item is hovering over it, changing its background and border style to provide visual feedback.
*   **Reset Button (`#resetBtn`):** Styled with a blue background, white text, and a hover effect.

### JavaScript (`js/script.js`)

The JavaScript handles the drag-and-drop logic and the reset functionality:

*   **Element Selection:** Selects the draggable item (`draggableItem`), all drop zones (`dropZones`), and the reset button (`resetButton`). It also stores the `initialParent` of the draggable item to facilitate resetting.
*   **Event Listeners:**
    *   `draggableItem`: `dragstart` (when dragging begins) and `dragend` (when dragging ends).
    *   `dropZones`: `dragover` (when an item is dragged over), `dragenter` (when an item enters a drop zone), `dragleave` (when an item leaves a drop zone), and `drop` (when an item is dropped).
    *   `resetButton`: `click` event.
*   **`handleDragStart()`:** When dragging starts, it adds the `hold` class (for styling) and then, after a very short delay, adds the `invisible` class to make the item disappear from its original position.
*   **`handleDragEnd()`:** When dragging ends, it removes the `hold` and `invisible` classes, making the item visible again.
*   **`handleDragOver(e)`:** Prevents the default behavior to allow dropping.
*   **`handleDragEnter(e)`:** Prevents default and adds the `hovered` class to the drop zone.
*   **`handleDragLeave()`:** Removes the `hovered` class from the drop zone.
*   **`handleDrop()`:** Removes the `hovered` class from the drop zone and appends the `draggableItem` to the current drop zone, effectively moving it.
*   **`resetLayout()`:** This new function moves the `draggableItem` back to its `initialParent` and removes any `hovered` classes from all drop zones, restoring the initial state.
