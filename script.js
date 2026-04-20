// Select all elements that should animate in 
const revealElements = document.querySelectorAll('.reveal');

// This function checks if an elemnt is on screen
function checkVisibility() {
    revealElements.forEach(function(element) {
        const position = element.getBoundingClientRect(); // position on screen
        if (position.top < Window.innerHeight -80) {
            element.classList.add('Visible'); // triggers the css animation
        }
    });
}

// Run whenever the user scrolls, and once at start
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();