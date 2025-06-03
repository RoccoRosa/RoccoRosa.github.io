// ScrollReveal animation setup
ScrollReveal().reveal('section', {
    delay: 200,
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle mobile nav menu


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
