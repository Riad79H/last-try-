const roseContainer = document.querySelector('.rose-container');
const fallingFlowersContainer = document.querySelector('.falling-flowers');
const messageContainer = document.querySelector('.message-container');
const container = document.querySelector('.container');

// Golap grow koranor function
function growRose() {
    roseContainer.classList.add('grow');
}

// Random position-e ful toiri ebong animation add korar function
function createFallingFlowers() {
    const numberOfFlowers = 50; // Kotogulo ful jhorbe
    const flowerImages = ['flower1.png', 'flower2.png', 'flower3.png']; // Tomar fuler image path

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        const img = document.createElement('img');
        img.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flower.appendChild(img);

        const randomX = Math.random() * 100; // X-axis-e random position
        const randomDelay = Math.random() * 2; // Animation-er shuru hote delay
        const randomDuration = Math.random() * 5 + 5; // Animation-er duration

        flower.style.left = `${randomX}vw`;
        flower.style.top = `${Math.random() * 100}vh`; // Starting position
        flower.style.animationDelay = `${randomDelay}s`;
        flower.style.animationDuration = `${randomDuration}s`;
        flower.style.transform = `scale(${Math.random() * 0.5 + 0.5})`; // Random size

        fallingFlowersContainer.appendChild(flower);
    }
}

// Page load howar por golap grow koro ebong ful jhoranor function call koro
window.onload = () => {
    growRose();
    createFallingFlowers();
};

// Tap korle message show koranor event listener
container.addEventListener('click', () => {
    messageContainer.classList.remove('hidden');
});