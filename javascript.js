// Select the scroll button element
const scrollBtn = document.querySelector('.scroll-btn');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled more than 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // If scrolled more than 20 pixels, display the scroll button
        scrollBtn.style.display = 'block';
    } else {
        // If not scrolled more than 20 pixels, hide the scroll button
        scrollBtn.style.display = 'none';
    }
});

// Add a click event listener to the scroll button
scrollBtn.addEventListener('click', () => {
    // When the scroll button is clicked, scroll to the top of the page with a smooth animation
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});
