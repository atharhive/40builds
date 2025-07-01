const addNoteButton = document.getElementById('addNoteBtn');
const noteSearchInput = document.getElementById('noteSearchInput');

// Load notes from local storage on startup
const storedNotes = JSON.parse(localStorage.getItem('notes'));

if (storedNotes) {
    storedNotes.forEach(noteText => createNoteElement(noteText));
}

addNoteButton.addEventListener('click', () => createNoteElement());

function createNoteElement(text = '') {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    noteCard.innerHTML = `
    <div class="note-toolbar">
        <button class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M410.3 231.1l-41.1 41.1c-4.7 4.7-12.3 4.7-17 0L305.4 267c-4.7-4.7-4.7-12.3 0-17l41.1-41.1c4.7-4.7 12.3-4.7 17 0l41.1 41.1zM256 32H128C57.3 32 0 89.3 0 160V448c0 70.7 57.3 128 128 128H384c70.7 0 128-57.3 128-128V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h128c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg></button>
        <button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
    </div>

    <div class="note-content ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editButton = noteCard.querySelector('.edit-btn');
    const deleteButton = noteCard.querySelector('.delete-btn');
    const noteContentDiv = noteCard.querySelector('.note-content');
    const noteTextArea = noteCard.querySelector('textarea');

    noteTextArea.value = text;
    noteContentDiv.innerHTML = text; // Display raw text, not markdown

    deleteButton.addEventListener('click', () => {
        noteCard.remove();
        updateLocalStorage();
    });

    editButton.addEventListener('click', () => {
        noteContentDiv.classList.toggle('hidden');
        noteTextArea.classList.toggle('hidden');
    });

    noteTextArea.addEventListener('input', (e) => {
        const { value } = e.target;
        noteContentDiv.innerHTML = value;
        updateLocalStorage();
    });

    document.body.appendChild(noteCard);
    updateLocalStorage(); // Update local storage after adding a new note
}

function updateLocalStorage() {
    const allNoteTextAreas = document.querySelectorAll('textarea');
    const notesData = [];

    allNoteTextAreas.forEach(textArea => notesData.push(textArea.value));

    localStorage.setItem('notes', JSON.stringify(notesData));
}

// New Feature: Search functionality
noteSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allNoteCards = document.querySelectorAll('.note-card');

    allNoteCards.forEach(card => {
        const noteText = card.querySelector('textarea').value.toLowerCase();
        if (noteText.includes(searchTerm)) {
            card.style.display = 'flex'; // Show the note
        } else {
            card.style.display = 'none'; // Hide the note
        }
    });
});
