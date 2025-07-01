const leftSection = document.querySelector('.left-section');
const rightSection = document.querySelector('.right-section');
const mainContainer = document.querySelector('.main-split-container');

leftSection.addEventListener('mouseenter', () => mainContainer.classList.add('hover-left'));
leftSection.addEventListener('mouseleave', () => mainContainer.classList.remove('hover-left'));

rightSection.addEventListener('mouseenter', () => mainContainer.classList.add('hover-right'));
rightSection.addEventListener('mouseleave', () => mainContainer.classList.remove('hover-right'));

// New Feature: Tooltip on hover
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('section-tooltip');
    tooltip.textContent = text;
    element.appendChild(tooltip);

    element.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translate(-50%, -10px)';
    });

    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translate(-50%, 0)';
    });
}

// Add tooltips to sections
createTooltip(leftSection, 'Click to discover nature!');
createTooltip(rightSection, 'Click to explore the city!');

// Add CSS for tooltip (this would typically be in style.css)
const tooltipStyle = document.createElement('style');
tooltipStyle.innerHTML = `
.section-tooltip {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.9em;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    z-index: 10;
}
`;
document.head.appendChild(tooltipStyle);
