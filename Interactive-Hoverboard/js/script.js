const gridContainer = document.getElementById('gridContainer');
const numSquaresInput = document.getElementById('numSquares');
const generateGridBtn = document.getElementById('generateGridBtn');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#f1c40f', '#9b59b6', '#3498db'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#34495e'; // Reset to default cell background
    element.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
}

function createGrid(numSquares) {
    gridContainer.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-cell');

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));

        gridContainer.appendChild(square);
    }
}

generateGridBtn.addEventListener('click', () => {
    const num = parseInt(numSquaresInput.value);
    if (num > 0 && num <= 1000) {
        createGrid(num);
    } else {
        alert('Please enter a number between 1 and 1000.');
    }
});

// Initial grid generation
createGrid(parseInt(numSquaresInput.value));
