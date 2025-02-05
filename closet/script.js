// Function to generate a random position
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

// Function to set random positions for images
function setRandomPositions() {
    const images = document.querySelectorAll('.flying-image');
    images.forEach((image) => {
        const { x, y } = getRandomPosition();
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
    });
}

// Function to move image away from the mouse
function moveAwayFromMouse(event) {
    const images = document.querySelectorAll('.flying-image');
    images.forEach((image) => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        const deltaX = imageCenterX - event.clientX;
        const deltaY = imageCenterY - event.clientY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const moveDistance = 100; // Move the image away by 100px

        // Calculate the direction and move the image away from the mouse
        const moveX = (deltaX / distance) * moveDistance;
        const moveY = (deltaY / distance) * moveDistance;

        // Apply the new position
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}
// Set random positions initially
setRandomPositions();

// Override the initial positions to be higher on the screen
const images = document.querySelectorAll('.flying-image');
images.forEach((image) => {
    const { x } = getRandomPosition();
    const y = Math.random() * (window.innerHeight / 2); // Position in the upper half of the screen
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
});

// Move the images when mouse moves
document.addEventListener('mousemove', moveAwayFromMouse);

// Reset the images when the mouse is not hovering
document.addEventListener('mouseleave', () => {
    const images = document.querySelectorAll('.flying-image');
    images.forEach(image => {
        image.style.transform = 'translate(0, 0)';
    });
});
