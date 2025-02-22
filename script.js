
const phrases = [
    "a bowl of candy.",
    "a bomber jacket from 2017.",
    "a scholastic book fair catalog.",
    "old blush with foundation brush."
];


let currentIndex = 0;


function updateText() {
    const textContainer = document.getElementById('text-container');

    textContainer.textContent = phrases[currentIndex];

    currentIndex = (currentIndex + 1) % phrases.length;
}

updateText();


setInterval(updateText, 5000);



const container = document.querySelector('.image-container');


container.addEventListener('mouseenter', function () {
    document.body.style.cursor = 'url("img/magGlass.png") 20 20, auto'; 
});


container.addEventListener('mouseleave', function () {
    document.body.style.cursor = 'url("img/magGlass.png") 20 20, auto'; 
});







const hoverText = document.querySelector('.hover-me');
const hoverBox = document.getElementById('hover-box');



hoverText.addEventListener('mouseenter', () => {
 hoverBox.style.display = 'block'; 
});


hoverText.addEventListener('mouseleave', () => {
 hoverBox.style.display = 'none'; 
});


hoverText.addEventListener('mousemove', (e) => {
 const offsetX = 10;  
 const offsetY = 10;  


 hoverBox.style.left = e.pageX + offsetX + 'px';
 hoverBox.style.top = e.pageY + offsetY + 'px';


 hoverBox.textContent = 'I wanted to eat these so bad as a kid';  
});
