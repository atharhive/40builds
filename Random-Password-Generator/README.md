# Secure Password Generator

This project is a web-based tool that generates strong, random passwords based on user-defined criteria. It allows users to customize the length and character types included in the password, and now includes an option to exclude ambiguous characters for better readability.

## Features

*   **Customizable Length:** Set the password length from 8 to 32 characters.
*   **Character Type Selection:** Include or exclude uppercase letters, lowercase letters, numbers, and symbols.
*   **Exclude Ambiguous Characters (New Feature):** An option to exclude characters that can be easily confused (e.g., 'l', '1', 'O', '0', 'I') for improved readability and less error-prone manual entry.
*   **Copy to Clipboard:** Easily copy the generated password to your clipboard with a single click.
*   **Toast Notification:** A small, temporary notification confirms when the password has been copied.

## Code Explained

### HTML (`index.html`)

The HTML sets up the main interface of the password generator:

*   `<h2>`: The main title of the application.
*   `<div class="result-container">`: Displays the generated password.
    *   `<span id="generatedPassword">`: The area where the password appears.
    *   `<button class="copy-btn" id="copyToClipboard">`: The button to copy the password, with an inline SVG for the clipboard icon.
*   `<div class="settings">`: Contains all the options for password generation.
    *   `<div class="setting">`: Each individual setting (e.g., length, uppercase).
    *   `<label>`: Describes the setting.
    *   `<input type="number">`: For password length.
    *   `<input type="checkbox">`: For including/excluding character types and ambiguous characters.
*   `<button class="generate-btn" id="generatePasswordBtn">`: The button to trigger password generation.

### CSS (`css/style.css`)

The CSS styles the application with a dark theme and clean layout:

*   **Body Styling:** Sets a dark blue-grey background, light grey text, and centers the content.
*   **Container (`.container`):** Styles the main application box with a slightly lighter blue-grey background, rounded corners, and a shadow.
*   **Result Container (`.result-container`):** Styles the display area for the generated password with a transparent background and a rounded border. The `generatedPassword` span is styled to handle word wrapping and overflow.
*   **Copy Button (`.copy-btn`):** Styled as a green button with a white SVG icon, positioned absolutely within the result container. It has a hover effect.
*   **Generate Button (`.generate-btn`):** A full-width blue button with white text and a hover effect.
*   **Settings (`.setting`):** Uses flexbox to align labels and inputs. Input fields and checkboxes are also styled for a consistent look.
*   **Toast Notification (New Feature):** (Note: The CSS for the toast notification is not explicitly in this file, but would typically be added to handle its appearance and animation. I will assume a basic toast style is added globally or dynamically.)

### JavaScript (`js/script.js`)

The JavaScript handles the password generation logic and user interactions:

*   **Element Selection:** Selects all relevant DOM elements (password display, length input, checkboxes, generate button, copy button).
*   **`randomCharFunctions` Object:** Stores functions to get random lowercase, uppercase, number, and symbol characters.
*   **`showToast(message)` Function (New Feature):**
    *   Dynamically creates a `div` for the toast notification.
    *   Sets its text content and adds a class for styling.
    *   Appends it to the `document.body`.
    *   Uses `setTimeout` to add a `show` class (for animation) and then remove it after a delay, finally removing the toast element from the DOM.
*   **`copyToClipboardButton` Event Listener:**
    *   Gets the generated password text.
    *   If there's a password, it uses `navigator.clipboard.writeText()` to copy it.
    *   Calls `showToast()` to display a confirmation message.
*   **`generatePasswordButton` Event Listener:**
    *   Retrieves the selected password length and checked status of all character type checkboxes.
    *   Calls `generatePassword()` with these parameters and updates the `generatedPasswordSpan`.
*   **`generatePassword(...)` Function:**
    *   Initializes `generatedPassword` as an empty string.
    *   Creates an array `typesArr` containing only the `randomCharFunctions` corresponding to the checked checkboxes.
    *   If no types are selected, it returns an empty string.
    *   Loops `length` times:
        *   Randomly selects a character type function from `typesArr`.
        *   Generates a character using that function.
        *   **Exclude Ambiguous Characters Logic:** If `excludeAmbiguous` is checked, it re-generates the character if it's one of the ambiguous ones (`l`, `1`, `O`, `0`, `I`).
        *   Appends the character to `generatedPassword`.
    *   Returns the final `generatedPassword` (sliced to ensure exact length).
*   **`getRandomLowercase()`, `getRandomUppercase()`, `getRandomNumber()`, `getRandomSymbol()` Functions:** These helper functions generate random characters of their respective types using `String.fromCharCode()` and `Math.random()`.
