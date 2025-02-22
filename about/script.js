
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showImage(index) {
   
    images.forEach((image) => {
        image.classList.remove('active');
    });
    images[index].classList.add('active');
}

showImage(currentIndex);

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    showImage(currentIndex);
});
