const buttons = document.querySelectorAll('.button-container button');
const radius = 300; 
const centerX = 150; 
const centerY = 150; 

buttons.forEach((button, index) => {
    const angle = (index / buttons.length) * (2 * Math.PI); 
    const x = centerX + radius * Math.cos(angle) - 30; 
    const y = centerY + radius * Math.sin(angle) - 30; 
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});