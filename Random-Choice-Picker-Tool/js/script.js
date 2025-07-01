const choiceTagsContainer = document.getElementById('choiceTags');
const optionsInput = document.getElementById('optionsInput');
const clearChoicesButton = document.getElementById('clearChoicesBtn');

optionsInput.focus();

optionsInput.addEventListener('keyup', (e) => {
    createChoiceTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        startRandomSelection();
    }
});

clearChoicesButton.addEventListener('click', () => {
    choiceTagsContainer.innerHTML = '';
    optionsInput.value = '';
    optionsInput.focus();
});

function createChoiceTags(input) {
    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());
    
    choiceTagsContainer.innerHTML = '';

    choices.forEach(choice => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = choice;
        choiceTagsContainer.appendChild(tagElement);
    });
}

function startRandomSelection() {
    const allTags = document.querySelectorAll('.tag');
    if (allTags.length === 0) return; // No choices to pick from

    const timesToHighlight = 30;

    const selectionInterval = setInterval(() => {
        const randomTag = pickRandomTag();
        if (randomTag) {
            highlightTag(randomTag);
            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(selectionInterval);

        setTimeout(() => {
            const finalChoice = pickRandomTag();
            highlightTag(finalChoice);
        }, 100);

    }, timesToHighlight * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}