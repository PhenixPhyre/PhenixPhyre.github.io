// Get all slot elements and Tooltip
const slots = document.querySelectorAll('.slot');
const tooltipText = document.getElementById('tooltip-text');
const tooltipSection = document.querySelector('.tooltip-section');
const topTooltipSection = document.querySelector('.top-tooltip-section');
const topTooltipText = document.getElementById('top-tooltip-text');

// Hover Event for Mouse-following
slots.forEach(slot => {
    slot.addEventListener('mouseover', function () {
        tooltipText.textContent = slot.getAttribute('data-tooltip');
        tooltipSection.style.visibility = 'visible';
        tooltipSection.style.height = '45px';

        // Show the top tooltip text
        showTopTooltip(slot.getAttribute('data-tooltip'));
        clearTimeout(window.topTooltipTimeout); 
    });

    slot.addEventListener('mouseout', function () {
        tooltipText.textContent = "";
        tooltipSection.style.visibility = 'hidden';
        tooltipSection.style.height = '0';

       
        window.topTooltipTimeout = setTimeout(() => {
            topTooltipSection.style.visibility = 'hidden';
            topTooltipSection.style.height = '0';
        }, 0); // Timeout
    });

    // Track mouse movement and update tooltip position
    slot.addEventListener('mousemove', function (e) {
        const mouseX = e.pageX + 10; // Offset from mouse
        const mouseY = e.pageY + 10;

        tooltipSection.style.left = mouseX + 'px';
        tooltipSection.style.top = mouseY + 'px';
    });
});

// Tooltip for Top Section
function showTopTooltip(message) {
    if (window.scrollY === 0) {
        topTooltipText.textContent = message; 
        topTooltipSection.style.visibility = 'visible';
        topTooltipSection.style.height = '45px';
    }
}

// Listen for the scroll event to hide/show top tooltip
window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
        topTooltipSection.style.visibility = 'visible';
        topTooltipSection.style.height = '45px';
    } else {
        topTooltipSection.style.visibility = 'hidden';
        topTooltipSection.style.height = '0';
    }
});
