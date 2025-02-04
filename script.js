// Array of phrases to choose from
const phrases = [
    "a bowl of candy.",
    "a bomber jacket from 2017.",
    "a scholastic book fair catalog.",
    "old makeup."
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
