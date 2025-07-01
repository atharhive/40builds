# Animated Navigation Menu

This project features a sleek, animated navigation menu that expands and collapses with a smooth transition. It's designed to be intuitive and visually appealing, perfect for modern web applications.

## Features

*   **Smooth Expansion/Collapse:** The navigation menu expands and collapses with a fluid animation.
*   **Dynamic Link Hover Effect:** Navigation links change color when hovered over, providing visual feedback.
*   **Modern Dark Theme:** The menu is styled with a dark theme, using contrasting colors for readability and a contemporary look.
*   **Hamburger Icon Animation:** The hamburger icon transforms into an 'X' when the menu is open, indicating its active state.

## Code Explained

### HTML (`index.html`)

The HTML structure defines the navigation menu:

*   `<nav>`: The main container for the navigation, with an `id` of `nav` and a `class` of `active` (initially open).
*   `<ul>`: Contains the list of navigation links (`<li>` with `<a>` tags).
*   `<button>`: The hamburger icon, with an `id` of `toggle` and a `class` of `icon`. It contains two `div` elements (`line line1` and `line line2`) that form the hamburger lines.

### CSS (`css/style.css`)

The CSS styles the menu and defines its animations:

*   **Body Styling:** Sets a dark grey background and uses the 'Muli' font.
*   **Navigation (`nav`):** Styles the menu container with a dark blue-grey background, padding, rounded corners, and a box shadow. The `width` property is animated to create the expansion/collapse effect.
*   **Active State (`nav.active`):** When the `active` class is applied, the menu's width expands.
*   **List Items (`nav ul li`):** Each list item has a `transform` and `opacity` transition for a rotating and fading effect when the menu expands.
*   **Links (`nav ul a`):** Styles the navigation links with light grey color and removes underlines. They have a margin for spacing and a larger font size.
*   **Icon (`.icon`):** Styles the hamburger icon button. The `line` elements within the icon are styled as horizontal lines.
*   **Icon Animation (`nav.active .icon .line1`, `nav.active .icon .line2`):** When the `active` class is applied to the `nav`, the lines of the icon rotate and translate to form an 'X' shape.

### JavaScript (`js/script.js`)

The JavaScript handles the interactivity:

*   **Element Selection:** Selects the toggle button (`menuToggleButton`), the navigation menu (`navigationMenu`), and all the navigation links (`navLinks`).
*   **Toggle Event Listener:** An event listener is added to `menuToggleButton`. When clicked, it toggles the `active` class on the `navigationMenu`, which triggers the CSS animations for expansion/collapse.
*   **Link Hover Effect:** A `forEach` loop iterates through each `navLink`. For each link, `mouseover` and `mouseout` event listeners are added. When the mouse hovers over a link, its color changes to red (`#e74c3c`). When the mouse leaves, the color reverts to the original light grey (`#ecf0f1`).
