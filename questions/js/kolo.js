 // Trzeba wysyłać wartości true / false (true - pokarze, false - zamknie)
 var powerup = new Audio('js/audio_powerup.mp3');
 var powerup2 = new Audio('js/audio_powerup2.mp3');
 function showBoostersWheele() {
    powerup.play();
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `<div class="overlay-background"><div class="overlay-content1">Losowanie<br>Bonusu</div></div>`;
    toggleOverlay(true)
}
function toggleOverlay(show) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = show ? 'flex' : 'none';
}
// Trzeba wysyłać druzynę (Numer drużyny), booster który został wylosowany
function pokazBooster(booster) {
    powerup2.play();
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `<div class="overlay-content">Otrzymano bonus:<br> ${booster} <br>`;
    setTimeout(function () {
        toggleOverlay(false);
    }, 5000);
}