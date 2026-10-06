// Array of photo URLs
const images = [
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1000",
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000"
];

let currentIndex = 0;
let timer = null;

// DOM Elements
const slideImg = document.getElementById('slide');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');

// Helper to update and show current image
function updateImage() {
    slideImg.src = images[currentIndex];
    slideImg.style.display = 'block'; // Make sure photo is visible
}

// Next Image
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Previous Image
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Play Button: Shows photo and starts slideshow
function startSlideshow() {
    updateImage(); // Ensure image is showing
    if (!timer) {
        timer = setInterval(nextSlide, 1500); // changes image every 1.5s
    }
}

// Stop Button: Stops slideshow AND hides the photo
function stopSlideshow() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    slideImg.style.display = 'none'; // Hide photo when stopped
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
});

playBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);

// Initialize image display on load
updateImage();