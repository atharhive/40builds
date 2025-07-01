const draggableItem = document.querySelector('.fill');
const dropZones = document.querySelectorAll('.empty');
const resetButton = document.getElementById('resetBtn');
const initialParent = draggableItem.parentNode; // Store the initial parent

// Event listeners for the draggable item
draggableItem.addEventListener('dragstart', handleDragStart);
draggableItem.addEventListener('dragend', handleDragEnd);

// Event listeners for each drop zone
dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('dragenter', handleDragEnter);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('drop', handleDrop);
});

// Reset button functionality
resetButton.addEventListener('click', resetLayout);

function handleDragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function handleDragEnd() {
    this.classList.remove('hold', 'invisible');
}

function handleDragOver(e) {
    e.preventDefault(); // Allow drop
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function handleDragLeave() {
    this.classList.remove('hovered');
}

function handleDrop() {
    this.classList.remove('hovered');
    this.append(draggableItem);
}

function resetLayout() {
    // Move the draggable item back to its initial parent
    initialParent.append(draggableItem);
    // Remove any hovered classes from drop zones
    dropZones.forEach(zone => zone.classList.remove('hovered'));
}
