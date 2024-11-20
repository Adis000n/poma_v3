let timerInterval;
let currentTime = 30;


const alarmSound = new Audio('js/bell-ring.mp3');

function startTimer() {
    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            document.getElementById('timer').innerText = currentTime;
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
    if (!document.getElementById('end-message')) {
        const endMessage = document.createElement('div');
        endMessage.id = 'end-message';
        endMessage.innerText = 'KONIEC CZASU';
        endMessage.style.position = 'fixed';
        endMessage.style.top = '0';
        endMessage.style.left = '0';
        endMessage.style.width = '100%';
        endMessage.style.height = '100%';
        endMessage.style.display = 'flex';
        endMessage.style.justifyContent = 'center';
        endMessage.style.alignItems = 'center';
        endMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        endMessage.style.color = 'white';
        endMessage.style.fontSize = '3rem';
        endMessage.style.zIndex = '1000';
        document.body.appendChild(endMessage);
    }
}

function removeEndMessage() {
    const endMessage = document.getElementById('end-message');
    if (endMessage) {
        document.body.removeChild(endMessage);
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

