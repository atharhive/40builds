# Content Loading Placeholder

This project demonstrates a content loading placeholder effect, commonly seen on websites while dynamic content is being fetched. It provides a visual indication to the user that content is on its way, improving perceived loading times.

## Features

*   **Animated Placeholder:** Displays animated grey blocks that mimic the layout of the content before it loads.
*   **Simulated Data Fetching:** Uses a `setTimeout` to simulate a network request, after which real content replaces the placeholders.
*   **Reload Functionality:** A "Reload Content" button has been added to re-trigger the loading animation and content update.
*   **Clean Design:** The placeholder and loaded content are presented within a clean, modern card UI.

## Code Explained

### HTML (`index.html`)

The HTML sets up the basic card structure:

*   `<div class="card">`: The main container for the content.
*   `<div class="card-header">`: Placeholder for an image.
*   `<div class="card-content">`: Contains the title, excerpt, and author information.
*   `<h3 class="card-title">` and `<p class="card-excerpt">`: Placeholders for text content. The excerpt contains `<span>` elements for individual lines.
*   `<div class="author">`: Contains the profile image and author details.
*   `<div class="profile-img">`: Placeholder for the author's image.
*   `<div class="author-info">`: Contains `<strong>` for the author's name and `<small>` for the date.

All placeholder elements initially contain `&nbsp;` (non-breaking space) to maintain their structure before content loads.

### CSS (`css/style.css`)

The CSS styles the card and the loading animations:

*   **Body Styling:** Sets a light grey background and centers the card.
*   **Card Styling:** Defines the card's appearance with a white background, rounded corners, and a subtle box shadow.
*   **Placeholder Styles:** Elements like `.card-header`, `.card-title`, `.card-excerpt span`, `.profile-img`, `.author-info strong`, and `.author-info small` are given a light grey background (`#e0e0e0`) to act as visual placeholders.
*   **Loading Animation (`.loading` class and `@keyframes pulse`):**
    *   When the `loading` class is added to the `.card` (via JavaScript), it applies the `pulse` animation to all placeholder elements.
    *   `@keyframes pulse`: This animation smoothly transitions the background color of the placeholders between `#e0e0e0` and `#f0f0f0`, creating a subtle pulsing effect.

### JavaScript (`js/script.js`)

The JavaScript handles the dynamic content loading and the new reload feature:

*   **Element Selection:** All relevant DOM elements (header, title, excerpt, profile image, name, date, card, and the newly created reload button) are selected.
*   **Reload Button Creation:** A new button element (`reloadButton`) is created dynamically, styled, and appended to the `body`.
*   **`updateContent()` Function:**
    *   This function is responsible for simulating content loading.
    *   It first adds the `loading` class to the `cardElement`, which triggers the CSS loading animations.
    *   A `setTimeout` simulates a 2.5-second delay (a typical network request time).
    *   Inside the `setTimeout`, the `innerHTML` of the placeholder elements is updated with actual content (a new image from Picsum, a new title, excerpt, and author details).
    *   Finally, the `loading` class is removed from `cardElement`, making the actual content visible.
*   **Event Listener:** An event listener is attached to the `reloadButton` to call `updateContent()` when clicked.
*   **Initial Load:** `updateContent()` is called once when the script loads to display the initial loading state and then the content.
