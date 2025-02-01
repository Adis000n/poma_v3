const MIN_WIDTH = 100; // Minimum width in pixels
const MAX_WIDTH = 1200; // Maximum width in pixels
const SCALE_FACTOR = 1.1; // 10% change per click

function resizeElement(element, scaleUp) {
    if (!element || element.style.display === 'none') return;
    
    const currentWidth = element.offsetWidth;
    const newWidth = scaleUp ? 
        Math.min(currentWidth * SCALE_FACTOR, MAX_WIDTH) : 
        Math.max(currentWidth / SCALE_FACTOR, MIN_WIDTH);
    
    element.style.transition = 'width 0.3s ease';
    element.style.width = newWidth + 'px';
}

function PowiekszZdj() {
    const elements = [
        document.getElementById('pytanie-img'),
        document.getElementById('odpowiedz-img'),
        document.getElementById('wideo')
    ];
    
    elements.forEach(element => resizeElement(element, true));
}

function PomniejszZdj() {
    const elements = [
        document.getElementById('pytanie-img'),
        document.getElementById('odpowiedz-img'),
        document.getElementById('wideo')
    ];
    
    elements.forEach(element => resizeElement(element, false));
}