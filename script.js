let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;
const card = document.querySelector('.card');
const viewDetailsButton = document.querySelector('.view-details');
const viewProductButton = document.querySelector('.view-product');

// Function to update the slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlidePosition();
});

// Event listener to flip the card to show details
viewDetailsButton.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// Event listener to flip the card back to the product view
viewProductButton.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// Function to auto slide images every 3 seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlidePosition();
}

setInterval(autoSlide, 3000);
