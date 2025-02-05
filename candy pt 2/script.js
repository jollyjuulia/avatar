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

