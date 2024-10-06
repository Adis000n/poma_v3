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

