// Rotating gear animation
const gear = document.querySelector('.gear-animation');
let rotation = 0;

function rotateGear() {
    rotation += 2;
    gear.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateGear);
}

rotateGear();

// Progress bar animation
const progress = document.querySelector('.progress');
let width = 0;
let direction = 1;

function animateProgress() {
    if (width >= 100) direction = -1;
    if (width <= 0) direction = 1;
    
    width += direction * 0.5;
    progress.style.width = width + '%';
    setTimeout(animateProgress, 50);
}

animateProgress();
