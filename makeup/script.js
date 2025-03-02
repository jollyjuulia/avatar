
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const scrollContainer = document.querySelector('.grid-container');


function smoothScroll(amount) {
 
  scrollContainer.scrollBy({
    left: amount,
    behavior: 'smooth', 
  });
}

scrollLeftButton.addEventListener('click', function () {
  smoothScroll(-2900); 
});

scrollRightButton.addEventListener('click', function () {
  smoothScroll(2900); 
});

