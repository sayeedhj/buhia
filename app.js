const navSlide = () => {
    const barLine = document.querySelector('.barLine');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    barLine.addEventListener('click', () => {
        // Toogle nav
        nav.classList.toggle('nav-active');

        // Animate links 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Bar Line Animation
        barLine.classList.toggle('toggle');
    });






}
navSlide();