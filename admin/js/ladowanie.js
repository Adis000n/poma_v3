document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('page-loader');

    if (!pageLoader) {
        return;
    }

    const loadingTexts = pageLoader.querySelectorAll('h1');
    let currentIndex = 0;

    // Hide all texts initially except the first one
    loadingTexts.forEach((text, index) => {
        text.style.display = index === 0 ? 'block' : 'none';
    });

    // Switch text every second
    const textInterval = setInterval(() => {
        loadingTexts[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % loadingTexts.length;
        loadingTexts[currentIndex].style.display = 'block';
    }, 1000);

    // Hide loader after 4 seconds (enough time to show all texts)
    setTimeout(() => {
        clearInterval(textInterval);
        pageLoader.classList.add('hidden');
    }, 4000);
});
