document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('page-loader');

    if (!pageLoader) {
        return;
    }

    setTimeout(() => {
        pageLoader.classList.add('hidden');
    }, 3000);
});
