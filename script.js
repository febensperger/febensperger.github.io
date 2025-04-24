// scripts.js - Basic interaction script
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully!");

    // Example Interaction: Alert when user clicks your name
    const nameHeader = document.querySelector('h1');
    nameHeader.style.cursor = "pointer";

    nameHeader.addEventListener('click', () => {
        alert("Welcome to Fernando Ebensperger's Personal Website!");
    });
});

// Sweet zoom-in effect for images (already provided previously)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.cute-image-container img');

    images.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener('click', () => {
            if (img.style.transform === 'scale(1.5)') {
                img.style.transform = 'scale(1)';
                img.style.transition = 'transform 0.3s ease';
            } else {
                img.style.transform = 'scale(1.5)';
                img.style.transition = 'transform 0.3s ease';
            }
        });
    });
});
