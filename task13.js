// Array of photo URLs
const images = [
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000", // Rose
    "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000", // Red Rose
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1000", // Yellow Flowers
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000"  // Pink Flowers
];

let currentIndex = 0;
let timer = null;

// DOM Elements
const slideImg = document.getElementById('slide');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');

// Display initial image
function updateImage() {
    slideImg.src = images[currentIndex];
}

// Next Image Function
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Previous Image Function
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Start Slideshow Function
function startSlideshow() {
    if (!timer) {
        timer = setInterval(nextSlide, 1500); // changes image every 1.5 seconds
    }
}

// Stop Slideshow Function
function stopSlideshow() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Event Listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
playBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);

// Initialize image display on page load
updateImage();