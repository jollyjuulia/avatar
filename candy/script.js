
const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
        } else {

            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5  
});


items.forEach(item => {
    if (item.tagName === 'IMG') {
        item.addEventListener('load', () => observer.observe(item));
    } else {
        observer.observe(item);
    }
});
