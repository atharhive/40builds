const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

const colors = ['#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#3498db', '#2980b9', '#9b59b6', '#8e44ad'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateGrid() {
  boxesContainer.innerHTML = ''; // Clear existing boxes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomColor();
      boxesContainer.appendChild(box);
    }
  }
}

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
  generateGrid(); // Regenerate grid with new colors
});

generateGrid();