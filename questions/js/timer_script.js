let timerInterval;
let currentTime = 30;
let alarmSound = new Audio('js/bell-ring.mp3');
let lastSeconds = new Audio('js/audio_clock-tick-long.mp3');
let isPaused = false;
let isLastSecondsPlaying = false;
let lastSecondsTimeLeft = 5000; 

alarmSound.load();
lastSeconds.load();

lastSeconds.volume = 0.25;
alarmSound.volume = 1;
let alarmPlaying = false;

async function startTimer() {
    isPaused = false;
    clearInterval(timerInterval);
    
    // Handle last seconds sound if already playing
    if (isLastSecondsPlaying && currentTime <= 5) {
        await lastSeconds.play();
        if (lastSecondsTimeLeft > 0) {
            setTimeout(async () => {
                if (!isPaused) {
                    lastSeconds.pause();
                    lastSeconds.currentTime = 0;
                    isLastSecondsPlaying = false;
                    alarmPlaying = false;
                }
            }, lastSecondsTimeLeft);
        }
    }
    
    // Choose interval based on current time
    if (currentTime > 5) {
        timerInterval = setInterval(() => {
            if (currentTime > 5) {
                currentTime--;
                document.getElementById('timer').innerText = currentTime;
                
                if (currentTime === 5) {
                    clearInterval(timerInterval);
                    startTimer();
                }
            }
        }, 1000);
    } else {
        timerInterval = setInterval(async () => {
            if (currentTime > 0) {
                currentTime -= 0.1;
                currentTime = Math.round(currentTime * 10) / 10;
                document.getElementById('timer').innerText = currentTime.toFixed(1);

                if (currentTime <= 5 && !alarmPlaying) {
                    await playLastSecondsAlarm();
                }
            } else {
                clearInterval(timerInterval);
                if (isLastSecondsPlaying) {
                    lastSeconds.pause();
                    lastSeconds.currentTime = 0;
                    isLastSecondsPlaying = false;
                    alarmPlaying = false;
                }
                Promise.all([
                    playAlarm(),
                    showEndMessage()
                ]);
            }
        }, 100);
    }
}

function stopTimer() {
    isPaused = true;
    clearInterval(timerInterval);
    if (isLastSecondsPlaying) {
        lastSeconds.pause();
        lastSecondsTimeLeft = 5000 - (lastSeconds.currentTime * 1000);
    }
}

function resetTimer() {
    currentTime = 30;
    document.getElementById('timer').innerText = currentTime;
    removeEndMessage(); 
    stopAlarm();
    clearInterval(timerInterval);
    
    // Reset last seconds countdown states
    isLastSecondsPlaying = false;
    lastSecondsTimeLeft = 5000;
    alarmPlaying = false;
    lastSeconds.pause();
    lastSeconds.currentTime = 0;
}

async function showEndMessage() {
    const container = document.getElementById('end-message-container');
    const endMessage = document.getElementById('end-message');
    
    container.style.display = 'flex';
    container.style.opacity = '1';
    endMessage.style.transform = 'scale(1)';
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    await removeEndMessage();
}

async function removeEndMessage() {
    const container = document.getElementById('end-message-container');
    const endMessage = document.getElementById('end-message');
    
    container.style.opacity = '0';
    endMessage.style.transform = 'scale(0.9)';
    await new Promise(resolve => setTimeout(resolve, 100));
    container.style.display = 'none';
}

async function playAlarm() {
    try {
        alarmSound.currentTime = 0;
        await alarmSound.play();
    } catch (error) {
        console.error('Error playing alarm:', error);
    }
}

async function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

function addTimer(){
    const wasUnderFiveSeconds = currentTime <= 5;
    currentTime = Math.floor(currentTime + 20);
    document.getElementById('timer').innerText = currentTime;
    
    if (wasUnderFiveSeconds) {
        lastSeconds.pause();
        lastSeconds.currentTime = 0;
        isLastSecondsPlaying = false;
        alarmPlaying = false;
        lastSecondsTimeLeft = 5000;
    }
    
    // Restart timer with new time
    clearInterval(timerInterval);
    startTimer();
}

async function playLastSecondsAlarm() {
    alarmPlaying = true;
    isLastSecondsPlaying = true;
    lastSecondsTimeLeft = 5000;
    try {
        await lastSeconds.play();
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (!isPaused) {
            lastSeconds.pause();
            lastSeconds.currentTime = 0;
            lastSecondsTimeLeft = 0;
        }
        isLastSecondsPlaying = false;
        alarmPlaying = false;
    } catch (error) {
        console.error('Error playing last seconds alarm:', error);
        isLastSecondsPlaying = false;
        alarmPlaying = false;
        lastSecondsTimeLeft = 0;
    }
}