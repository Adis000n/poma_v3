let timerInterval;
let currentTime = 30;
let alarmSound = new Audio('js/bell-ring.mp3');
let lastSeconds = new Audio('js/audio_clock-tick-long.mp3');
lastSeconds.volume = 0.3;
alarmSound.volume = 1;
let alarmPlaying = false;

function startTimer() {
    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            document.getElementById('timer').innerText = currentTime;


            if (currentTime <= 5 && !alarmPlaying) {
                playLastSecondsAlarm(); 
            }
        } else {
            clearInterval(timerInterval);
            showEndMessage(); 
            playAlarm();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    currentTime = 30;
    document.getElementById('timer').innerText = currentTime;
    removeEndMessage(); 
    stopAlarm();
}

function showEndMessage() {
    if (!document.getElementById('end-message-container')) {
        const container = document.createElement('div');
        container.id = 'end-message-container';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.zIndex = '1000';
        container.style.opacity = '0';
        container.style.transition = 'opacity 0.5s ease';

        const endMessage = document.createElement('img');
        endMessage.id = 'end-message';
        endMessage.src = "../grafika/koniec-czasu.png";
        endMessage.style.maxWidth = '90%';
        endMessage.style.maxHeight = '90vh';
        endMessage.style.objectFit = 'contain';
        endMessage.style.display = 'block';
        endMessage.style.transform = 'scale(0.9)';
        endMessage.style.transition = 'transform 0.5s ease';

        container.appendChild(endMessage);
        document.body.appendChild(container);
        

        requestAnimationFrame(() => {
            container.style.opacity = '1';
            endMessage.style.transform = 'scale(1)';
        });
        
        setTimeout(() => {
            removeEndMessage();
        }, 5300); 
    }
}

function removeEndMessage() {
    const container = document.getElementById('end-message-container');
    if (container) {
        container.style.opacity = '0';
        container.querySelector('#end-message').style.transform = 'scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(container);
        }, 300);
    }
}

function playAlarm() {
    alarmSound.play(); 
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0; 
}

function addTimer(){
    currentTime += 20;
    document.getElementById('timer').innerText = currentTime;
}

function playLastSecondsAlarm() {
    alarmPlaying = true; 
    lastSeconds.play();
    setTimeout(() => {
        lastSeconds.pause();
        lastSeconds.currentTime = 0; 
        alarmPlaying = false; 
    }, 5000);
}