let dvds = [];
let animationRunning = false;
const obrazki = [
    "o_nas/adi.JPG",
    "o_nas/jakub.jpg",
    "o_nas/kuba.jpg",
    "o_nas/mati.jpg",
    "o_nas/mikolaj.jpg",
    "o_nas/oliwier.jpg",
    "o_nas/pawel.jpg"
];

document.getElementById("eventConsoleSend").addEventListener("click", () => {

    var konsola = document.getElementById("eventConsole");
    var komenda = konsola.value;

    if (komenda == "imprezka") {

        const amount = 7;

        for (let i = 0; i < amount; i++) {

            const img = document.createElement("img");
            img.src = obrazki[i];
            img.classList.add("dvd");

            document.body.appendChild(img);

            dvds.push({
                element: img,
                x: 0.5 * window.innerWidth,
                y: 0.5 * window.innerHeight,
                dx: (Math.random() * 4) + 1,
                dy: (Math.random() * 4) + 1,
                rotation: 0,
                rotationSpeed: (Math.random() * 4) - 2 // losowa prędkość obrotu
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

        // aktualizacja rotacji
        dvd.rotation += dvd.rotationSpeed;

        if (dvd.x + width >= window.innerWidth || dvd.x <= 0) {
            dvd.dx *= -1;
        }

        if (dvd.y + height >= window.innerHeight || dvd.y <= 0) {
            dvd.dy *= -1;
        }

        el.style.left = dvd.x + "px";
        el.style.top = dvd.y + "px";

        // ROTACJA
        el.style.transform = `rotate(${dvd.rotation}deg)`;

    });

    requestAnimationFrame(animate);
}

