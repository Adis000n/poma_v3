// Trzeba wysyłać wartości true / false (true - pokarze, false - zamknie)
var powerup = new Audio('js/audio_powerup.mp3');
var powerup2 = new Audio('js/audio_powerup2.mp3');
var fail = new Audio('js/fail.mp3');

powerup.load();
powerup2.load();
fail.load();

powerup.volume = 1;
powerup2.volume = 0.9;
fail.volume = 0.25;
var overlayV = true;
function showBoostersWheele() {
    powerup.play();
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `<div class="overlay-background"><div class="overlay-content1">Losowanie<br>Bonusu</div></div>`;
    toggleOverlay(true)
}
function toggleOverlay(show) {
    if(show == false){
        overlayV = false;
        setTimeout(() => {
            overlayV = true;
        }, 3000);
    }
    
    if (!overlayV && show) {
        return; // Prevent showing overlay while overlayV is false
    }
    
    const overlay = document.getElementById('overlay');
    overlay.style.display = show ? 'flex' : 'none';
}
// Trzeba wysyłać druzynę (Numer drużyny), booster który został wylosowany
function pokazBooster(booster) {
    if(booster == "Utrata kolejki"){
        fail.play();
    }else{
        powerup2.play();
    }
    
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `<div class="overlay-content">Otrzymano bonus:<br> ${booster} <br>`;
    setTimeout(function () {
        toggleOverlay(false);
    }, 5000);
}