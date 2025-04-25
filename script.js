document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully!");

    const nameHeader = document.querySelector('h1');
    if (nameHeader) {
        nameHeader.style.cursor = "pointer";
        nameHeader.addEventListener('click', () => {
            alert("Welcome to Fernando Ebensperger's Personal Website!");
        });
    }

    const images = document.querySelectorAll('.cute-image-container img');
    images.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener('click', () => {
            if (img.style.transform === 'scale(1.5)') {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(1.5)';
            }
            img.style.transition = 'transform 0.3s ease';
        });
    });
});
