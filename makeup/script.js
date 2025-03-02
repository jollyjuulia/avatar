// Get the button elements and the scroll container
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const scrollContainer = document.querySelector('.grid-container');

// Function to scroll the container smoothly by a specific amount
function smoothScroll(amount) {
  // Use the scrollLeft property with a smooth scroll behavior
  scrollContainer.scrollBy({
    left: amount,
    behavior: 'smooth', // This ensures smooth scrolling
  });
}

// Scroll left on button click
scrollLeftButton.addEventListener('click', function () {
  smoothScroll(-2900); // Scroll left by 200px
});

// Scroll right on button click
scrollRightButton.addEventListener('click', function () {
  smoothScroll(2900); // Scroll right by 200px
});

