const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const resetBtn = document.getElementById('reset_btn');
const addBtn  = document.getElementById('add_btn');
const time = document.getElementById('time');
let timerInterval;
let currentTime = 30;
function setButtonState({ start, stop, reset }) {
    startBtn.disabled = start;
    stopBtn.disabled = stop;
    resetBtn.disabled = reset;
}
function sendTimerMessage(action) {
    const message = { timer: action };
    sendMessage(JSON.stringify(message));
}
setButtonState({ start: false, stop: true, reset: true });
startBtn.addEventListener('click', () => {
    timerInterval = setInterval(() => {
        if (currentTime > 0) {
            currentTime--;
            time.innerText = currentTime;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
    setButtonState({ start: true, stop: false, reset: false });
    sendTimerMessage('start');
});
stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    setButtonState({ start: false, stop: true, reset: false });
    sendTimerMessage('stop');
});
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    currentTime = 30;
    time.innerText = currentTime;
    setButtonState({ start: false, stop: true, reset: true });
    sendTimerMessage('reset');
});

addBtn.addEventListener('click', () => {
    currentTime += 20;
    time.innerText = currentTime;
    sendTimerMessage('add');
});
