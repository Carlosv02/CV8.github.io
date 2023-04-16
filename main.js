document.addEventListener("DOMContentLoaded", function() {

const carousel = document.querySelector('.card-image');
const images = carousel.children;
let currentIndex = 0;

setInterval(() => {
    currentIndex++

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const imageWidth = images[0].offsetWidth;
    carousel.style.transform = 'translateY(-${imageWidth * currentIndex} px)';

    // console.log("WORKING");
}, 3000);
});