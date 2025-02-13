// Array of phrases to choose from
const phrases = [
    "a bowl of candy.",
    "a bomber jacket from 2017.",
    "a scholastic book fair catalog.",
    "old blush with foundation brush."
];

// Variable to keep track of which phrase to display
let currentIndex = 0;

// Function to update the text in the div
function updateText() {
    // Get the text container element
    const textContainer = document.getElementById('text-container');
    
    // Update the text content of the div
    textContainer.textContent = phrases[currentIndex];

    // Move to the next phrase, and reset to 0 after the last one
    currentIndex = (currentIndex + 1) % phrases.length;
}

// Update the text immediately when the page loads
updateText();

// Change the text every 3 seconds (3000 ms)
setInterval(updateText, 5000);


// Select the image container
const container = document.querySelector('.image-container');

// When the mouse enters the image container, increase cursor size
container.addEventListener('mouseenter', function () {
    document.body.style.cursor = 'url("img/magGlass.png") 20 20, auto'; // Use a larger cursor image
});

// When the mouse leaves the image container, reset the cursor
container.addEventListener('mouseleave', function () {
    document.body.style.cursor = 'url("img/magGlass.png") 20 20, auto'; // Use a default-sized cursor
});






// Get references to the elements
const hoverText = document.querySelector('.hover-me');
const hoverBox = document.getElementById('hover-box');


// Show hover text when hovering over .text-edit
hoverText.addEventListener('mouseenter', () => {
 hoverBox.style.display = 'block';  // Show the hover box
});


hoverText.addEventListener('mouseleave', () => {
 hoverBox.style.display = 'none';  // Hide the hover box
});


hoverText.addEventListener('mousemove', (e) => {
 const offsetX = 10;  // Horizontal distance from cursor
 const offsetY = 10;  // Vertical distance from cursor


 // Position the hover box near the mouse cursor
 hoverBox.style.left = e.pageX + offsetX + 'px';
 hoverBox.style.top = e.pageY + offsetY + 'px';


 hoverBox.textContent = 'I wanted to eat these so bad as a kid';  // Text to display
});
