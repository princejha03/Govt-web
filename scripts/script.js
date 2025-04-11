// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.slide');
const prevSlideButton = document.querySelector('.prev-slide');
const nextSlideButton = document.querySelector('.next-slide');
let currentSlide = 0;


mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Slideshow Functionality

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event Listeners for Slide Controls
prevSlideButton.addEventListener('click', prevSlide);
nextSlideButton.addEventListener('click', nextSlide);

// Auto Slide Change (Optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds