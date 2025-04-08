// Get all slot elements and Tooltip
const slots = document.querySelectorAll('.slot'); 
const tooltipText = document.getElementById('tooltip-text');

// Hover Event 
slots.forEach(slot => {
    slot.addEventListener('mouseover', function() {
        tooltipText.textContent = slot.getAttribute('data-tooltip'); 
        const tooltipSection = document.querySelector('.tooltip-section');
        tooltipSection.style.visibility = 'visible'; 
        tooltipSection.style.height = '45px';
    });

    slot.addEventListener('mouseout', function() {
        tooltipText.textContent = ""; 
        const tooltipSection = document.querySelector('.tooltip-section');
        tooltipSection.style.visibility = 'hidden'; 
        tooltipSection.style.height = '0'; 
    });
});
