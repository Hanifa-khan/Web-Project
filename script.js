// Javascript for Spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".spinner").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000);
};

   // JavaScript for slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Automatically change slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Show first slide initially
    showSlide(currentIndex);

    // Event listeners for arrows
    document.querySelector('.left-arrow').addEventListener('click', prevSlide);
    document.querySelector('.right-arrow').addEventListener('click', nextSlide);
});

    // Humburger menu functionality
    const humburger = document.querySelector('.humburger');
    const navLinks = document.querySelector('.nav-links');

    humburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

// Contact Form code
function handleFormSubmit(event) {
    //Default form submission
    event.preventDefault();

    // Reset the form fields
    document.getElementById('contact-form').reset();

}