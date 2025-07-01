# FAQ Accordion Collapse

This project implements an interactive Frequently Asked Questions (FAQ) section using an accordion-style collapse mechanism. Users can click on a question to reveal its answer, and click again to hide it. The design is clean and user-friendly.

## Features

*   **Accordion Functionality:** Questions expand to reveal answers and collapse when clicked again.
*   **Single Open Item (New Feature):** When a new FAQ item is opened, all other currently open items automatically close, ensuring a clean and focused user experience.
*   **Clear Visual Cues:** Toggle buttons change icons and background colors to indicate the open/closed state.
*   **Modern Design:** Utilizes a clean, light theme with subtle shadows and clear typography.

## Code Explained

### HTML (`index.html`)

The HTML structure defines the FAQ section:

*   `<h1>`: The main heading for the FAQ section.
*   `<div class="faq-container">`: The main container for all FAQ items.
*   `<div class="faq">`: Each individual FAQ item.
    *   `<h3 class="faq-title">`: The question itself.
    *   `<p class="faq-text">`: The answer, initially hidden.
    *   `<button class="faq-toggle">`: The toggle button. It contains two SVG icons: one for the chevron-down (collapsed state) and one for the times/close (expanded state).

### CSS (`css/style.css`)

The CSS styles the FAQ items and their interactive states:

*   **Body Styling:** Sets a light grey background and uses the 'Muli' font.
*   **FAQ Container (`.faq-container`):** Centers the FAQ section on the page and sets a maximum width.
*   **FAQ Item (`.faq`):**
    *   Styled with a white background, light border, rounded corners, and a subtle box shadow.
    *   `overflow: hidden` is used to contain the content.
    *   `transition: 0.3s ease`: Ensures smooth transitions for changes.
*   **Active FAQ Item (`.faq.active`):** When the `active` class is applied:
    *   Its background changes to a very light grey.
    *   Its box shadow becomes more prominent.
*   **FAQ Text (`.faq-text`):** Initially `display: none` to hide the answer. When the parent `.faq` has the `active` class, it becomes `display: block`.
*   **Toggle Button (`.faq-toggle`):**
    *   Styled as a circular blue button with white SVG icons.
    *   `position: absolute`: Positions it at the top-right of the FAQ item.
    *   `transition: background-color 0.3s ease`: Smoothly changes its background color on hover.
*   **Icon Toggling:**
    *   `.faq-toggle .icon-times`: Initially `display: none`.
    *   `.faq.active .faq-toggle .icon-times`: Becomes `display: block` when the FAQ is active.
    *   `.faq.active .faq-toggle .icon-chevron-down`: Becomes `display: none` when the FAQ is active.
*   **Active Toggle Button (`.faq.active .faq-toggle`):** Changes to a red background when the FAQ is active.

### JavaScript (`js/script.js`)

The JavaScript handles the accordion's interactive behavior:

*   **Element Selection:** Selects all FAQ toggle buttons (`faqToggles`) and all FAQ items (`faqItems`).
*   **Event Listener Loop:** It iterates through each `faqToggles` button and attaches a `click` event listener.
*   **Click Handler:** When a toggle button is clicked:
    *   `parentFaqItem`: Gets the parent `.faq` element of the clicked button.
    *   **Close Other Items (New Feature):** It then iterates through all `faqItems`. If an item is not the `parentFaqItem` (i.e., it's another FAQ item) and it currently has the `active` class, that `active` class is removed, effectively closing it.
    *   **Toggle Current Item:** Finally, `parentFaqItem.classList.toggle('active')` is called. This adds the `active` class if it's not present (expanding the FAQ) or removes it if it is present (collapsing the FAQ).
