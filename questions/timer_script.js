let timerInterval;
let currentTime = 30;

function startTimer() {
    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            document.getElementById('timer').innerText = currentTime;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    currentTime = 30;
    document.getElementById('timer').innerText = currentTime;
}

initializeWebSocket('ws://localhost:3000/ws', (data) => {
    const message = JSON.parse(data);
    if (message.timer) {
        const timerStatus = message.timer;
        if (timerStatus === "start") {
            startTimer();
        } else if (timerStatus === "stop") {
            stopTimer();
        } else if (timerStatus === "reset") {
            stopTimer(); 
            resetTimer();
        }
    }
});