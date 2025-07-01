# Simple Notes Application

This project is a straightforward web-based notes application that allows users to create, edit, delete, and store notes directly in their browser. It provides a clean interface for quick note-taking.

## Features

*   **Create Notes:** Easily add new blank notes to the application.
*   **Edit Notes:** Toggle between view and edit modes for each note.
*   **Delete Notes:** Remove unwanted notes with a dedicated delete button.
*   **Local Storage Persistence:** All notes are automatically saved to your browser's local storage, so they persist even after closing the browser.
*   **Note Search (New Feature):** A search bar has been added to filter notes based on their content, making it easy to find specific notes.

## Code Explained

### HTML (`index.html`)

The HTML sets up the main structure of the application:

*   `<div class="top-controls">`: A container for the add note button and the search input.
*   `<button class="add-note-btn" id="addNoteBtn">`: A button to add new notes. It includes an SVG icon for a plus sign.
*   `<input type="text" id="noteSearchInput" placeholder="Search notes...">`: The new search input field.
*   Notes are dynamically added to the `body` by JavaScript.

### CSS (`css/style.css`)

The CSS styles the notes application with a clean, light theme:

*   **Body Styling:** Sets a light grey background and uses the 'Poppins' font.
*   **Add Note Button (`.add-note-btn`):** Styled as a fixed green button with white text and an SVG icon. It has a hover effect and a subtle box shadow.
*   **Note Card (`.note-card`):** Each note is a white card with a shadow, rounded corners, and `overflow: hidden`. It uses `display: flex` and `flex-direction: column` to arrange its internal elements.
*   **Note Toolbar (`.note-toolbar`):** The top section of each note, containing the edit and delete buttons. It has a dark blue-grey background.
*   **Toolbar Buttons (`.note-toolbar button`):** Styled as transparent buttons with light grey SVG icons, changing to green on hover.
*   **Textarea (`.note-card textarea`):** The editable area for the note content. It takes up the remaining vertical space (`flex-grow: 1`) and has no border or outline.
*   **Note Content (`.note-card .note-content`):** The display area for the note content when not in edit mode. It also takes up remaining vertical space and has `overflow-y: auto` for scrolling.
*   **`hidden` Class:** Used to toggle the visibility of the textarea and content div.

### JavaScript (`js/script.js`)

The JavaScript handles the core functionality of the notes application:

*   **Element Selection:** Selects the add note button and the new note search input.
*   **Local Storage Loading:** On page load, it attempts to retrieve notes from local storage (`localStorage.getItem('notes')`). If notes exist, it parses them and calls `createNoteElement()` for each one.
*   **`createNoteElement(text = '')` Function:**
    *   Creates a new `div` element for a note card.
    *   Sets its `innerHTML` to the HTML structure of a note, including the toolbar, content display, and textarea.
    *   Selects the edit button, delete button, content div, and textarea within the newly created note.
    *   Sets the initial `value` of the textarea and `innerHTML` of the content div based on the `text` parameter.
    *   **Delete Button Listener:** When clicked, it removes the note card from the DOM and calls `updateLocalStorage()`.
    *   **Edit Button Listener:** When clicked, it toggles the `hidden` class on both the `noteContentDiv` and `noteTextArea`, switching between view and edit modes.
    *   **Textarea Input Listener:** When the textarea's content changes, it updates the `noteContentDiv`'s `innerHTML` and calls `updateLocalStorage()`.
    *   Appends the new note card to the `document.body` and calls `updateLocalStorage()`.
*   **`updateLocalStorage()` Function:**
    *   Selects all `textarea` elements (which represent the current notes).
    *   Extracts the `value` from each textarea and pushes it into a `notesData` array.
    *   Saves the `notesData` array to local storage as a JSON string (`localStorage.setItem('notes', JSON.stringify(notesData))`).
*   **Search Functionality (New Feature):**
    *   An `input` event listener is added to `noteSearchInput`.
    *   When the user types, it gets the `searchTerm` and converts it to lowercase.
    *   It then selects all `note-card` elements.
    *   For each note card, it gets the text content from its `textarea` and converts it to lowercase.
    *   If the note text `includes` the `searchTerm`, the note card's `display` style is set to `flex` (to show it); otherwise, it's set to `none` (to hide it).
