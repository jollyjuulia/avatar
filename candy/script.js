// Select all items that will be animated
const items = document.querySelectorAll('.item');

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'show' class when the item comes into view
            entry.target.classList.add('show');
        } else {
            // Optionally remove the 'show' class when the item leaves the viewport
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5  // Trigger when 50% of the item is visible in the viewport
});

// Observe each item after ensuring images are loaded
items.forEach(item => {
    if (item.tagName === 'IMG') {
        item.addEventListener('load', () => observer.observe(item));
    } else {
        observer.observe(item);
    }
});
