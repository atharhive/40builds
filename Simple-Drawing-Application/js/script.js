const drawingCanvas = document.getElementById('drawingCanvas');
const increaseSizeBtn = document.getElementById('increaseSize');
const decreaseSizeBtn = document.getElementById('decreaseSize');
const currentSizeSpan = document.getElementById('currentSize');
const drawingColorInput = document.getElementById('drawingColor');
const clearCanvasBtn = document.getElementById('clearCanvas');
const saveCanvasBtn = document.getElementById('saveCanvas');

const ctx = drawingCanvas.getContext('2d');

let brushSize = 10;
let isDrawing = false;
let currentColor = 'black';
let lastX, lastY;

// Set initial color and size
drawingColorInput.value = currentColor;
currentSizeSpan.innerText = brushSize;

// Event Listeners
drawingCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

drawingCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
    lastX = undefined;
    lastY = undefined;
});

drawingCanvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const x = e.offsetX;
    const y = e.offsetY;

    drawCircle(x, y);
    drawLine(lastX, lastY, x, y);

    [lastX, lastY] = [x, y];
});

increaseSizeBtn.addEventListener('click', () => {
    brushSize += 5;
    if (brushSize > 50) {
        brushSize = 50;
    }
    updateSizeDisplay();
});

decreaseSizeBtn.addEventListener('click', () => {
    brushSize -= 5;
    if (brushSize < 5) {
        brushSize = 5;
    }
    updateSizeDisplay();
});

drawingColorInput.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
});

saveCanvasBtn.addEventListener('click', () => {
    const dataURL = drawingCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Drawing Functions
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fillStyle = currentColor;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize * 2;
    ctx.lineCap = 'round'; // Make lines round
    ctx.stroke();
}

// Helper to update size display
function updateSizeDisplay() {
    currentSizeSpan.innerText = brushSize;
}