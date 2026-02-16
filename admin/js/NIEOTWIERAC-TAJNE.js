let dvds = [];
let animationRunning = false;
const obrazki = [
    "img/my/1",
    "img/my/1",
    "img/my/1"
];

document.getElementById("eventConsoleSend").addEventListener("click", () => {

    var konsola = document.getElementById("eventConsole");
    var komenda = konsola.value;

    if (komenda == "imprezka") {

        const amount = 5;

        for (let i = 0; i < amount; i++) {

            const img = document.createElement("img");
            img.src = obrazki[Math.floor(Math.random() * obrazki.length)];
            img.classList.add("dvd");

            document.body.appendChild(img);

            dvds.push({
                element: img,
                x: 0.5 * window.innerWidth,
                y: 0.5 * window.innerHeight,
                dx: (Math.random() * 4) + 1,
                dy: (Math.random() * 4) + 1
            });
        }

        if (!animationRunning) {
            animationRunning = true;
            animate();
        }
    }
});

function animate() {

    dvds.forEach(dvd => {

        const el = dvd.element;

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        dvd.x += dvd.dx;
        dvd.y += dvd.dy;

        if (dvd.x + width >= window.innerWidth || dvd.x <= 0) {
            dvd.dx *= -1;
            el.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }

        if (dvd.y + height >= window.innerHeight || dvd.y <= 0) {
            dvd.dy *= -1;
            el.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }

        el.style.left = dvd.x + "px";
        el.style.top = dvd.y + "px";
    });

    requestAnimationFrame(animate);
}
