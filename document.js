document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For demonstration, we'll just log it to the console
            console.log('Form submitted:', { name, email, message });
            
            // Show a success message to the user
            alert('Thank you for your message. We will get back to you soon!');
            
            // Clear the form
            form.reset();
        });
    }

    // Animation code
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in-left, .slide-in-right');
    const scalers = document.querySelectorAll('.scale-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(
        (entries, appearOnScroll) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            });
        },
        appearOptions
    );

    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));
    scalers.forEach(scaler => appearOnScroll.observe(scaler));
});