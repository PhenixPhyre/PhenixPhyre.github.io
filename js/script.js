// Get all slot elements
const slots = document.querySelectorAll('.slot');

// Get the tooltip text element
const tooltipText = document.getElementById('tooltip-text');

// Add hover event listener to each slot
slots.forEach(slot => {
    slot.addEventListener('mouseover', function() {
        tooltipText.textContent = slot.getAttribute('data-tooltip'); // Update text on hover
        const tooltipSection = document.querySelector('.tooltip-section');
        tooltipSection.style.visibility = 'visible'; // Make tooltip visible
        tooltipSection.style.height = '45px'; // Allow the tooltip to take up space
    });

    slot.addEventListener('mouseout', function() {
        tooltipText.textContent = ""; // Clear text when not hovering
        const tooltipSection = document.querySelector('.tooltip-section');
        tooltipSection.style.visibility = 'hidden'; // Hide the tooltip
        tooltipSection.style.height = '0'; // Collapse the tooltip section
    });
});
