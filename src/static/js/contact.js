document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');

    contactButton.addEventListener('click', function() {
        contactForm.classList.toggle('hidden');
    });


    const projectButton = document.getElementById('project-button-1');
    const projectCard = document.getElementById('project-card-1');

    projectButton.addEventListener('click', function() {
        const isHidden = projectCard.style.display === 'none';
        projectCard.style.display = isHidden ? 'block' : 'none';
        projectButton.textContent = isHidden ? 'Show Less' : 'Read More';
    });

});