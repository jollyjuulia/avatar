// Get all images in the carousel and buttons
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to show the image at the current index
function showImage(index) {
    // Remove the 'active' class from all images
    images.forEach((image) => {
        image.classList.remove('active');
    });
    // Add 'active' class to the current image
    images[index].classList.add('active');
}

// Show the first image initially
showImage(currentIndex);

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image when reaching the end
    showImage(currentIndex);
});

// Event listener for the "Prev" button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to last image when going backwards
    showImage(currentIndex);
});
