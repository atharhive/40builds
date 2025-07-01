const rangeInput = document.getElementById('range');
const valueLabel = rangeInput.nextElementSibling;

rangeInput.addEventListener('input', (e) => {
    const value = +e.target.value;
    const min = +e.target.min;
    const max = +e.target.max;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(valueLabel).getPropertyValue('width');

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const left = value * (num_width / max) - num_label_width / 2 + mapRange(value, min, max, 10, -10);

    valueLabel.style.left = `${left}px`;

    const percentage = ((value - min) / (max - min)) * 100;
    valueLabel.innerHTML = `${value} (${percentage.toFixed(0)}%)`;
});

// Function to map a number from one range to another
const mapRange = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
