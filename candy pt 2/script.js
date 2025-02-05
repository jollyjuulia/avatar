document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dispense-btn');
    const candyLandingZone = document.querySelector('.candy-landing-zone');

    const candyImages = [
        'img/Subject 14 copy 2.png', 
        'img/Subject 15 copy.png',
        'img/Subject 16.png',
        'img/Subject 17.png'
    ];

    

    // Function to create and animate a candy
    function dispenseCandy() {
        const candy = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * candyImages.length); // Random candy
        candy.src = candyImages[randomIndex];
        candy.classList.add('candy');

        // Set a random horizontal position within the landing zone
        const randomPosition = Math.floor(Math.random() * (candyLandingZone.offsetWidth - 50)); // 50 is the candy width
        candy.style.left = `${randomPosition}px`;

        // Append the candy to the landing zone
        candyLandingZone.appendChild(candy);

        // Remove the candy after it finishes falling (2s for animation + 1s delay)
        setTimeout(() => {
            candy.remove();
        }, 3000); // Adjust to match the animation duration
    }

    // Event listener for the button
    button.addEventListener('click', dispenseCandy);
});


const candyImages = [
    'img/Subject 14 copy 2.png', 
    'img/Subject 15 copy.png',
    'img/Subject 16.png',
    'img/Subject 17.png'
];



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


