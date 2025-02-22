
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}


function setRandomPositions() {
    const images = document.querySelectorAll('.flying-image');
    images.forEach((image) => {
        const { x, y } = getRandomPosition();
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
    });
}


function moveAwayFromMouse(event) {
    const images = document.querySelectorAll('.flying-image');
    images.forEach((image) => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        const deltaX = imageCenterX - event.clientX;
        const deltaY = imageCenterY - event.clientY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const moveDistance = 50; 


        const moveX = (deltaX / distance) * moveDistance;
        const moveY = (deltaY / distance) * moveDistance;

  
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

setRandomPositions();

const images = document.querySelectorAll('.flying-image');
images.forEach((image) => {
    const { x } = getRandomPosition();
    const y = Math.random() * (window.innerHeight / 2); 
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
});


document.addEventListener('mousemove', moveAwayFromMouse);


document.addEventListener('mouseleave', () => {
    const images = document.querySelectorAll('.flying-image');
    images.forEach(image => {
        image.style.transform = 'translate(0, 0)';
    });
});
