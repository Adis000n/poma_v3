const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const resetBtn = document.getElementById('reset_btn');
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
    setButtonState({ start: true, stop: false, reset: false });
    sendTimerMessage('start');
});
stopBtn.addEventListener('click', () => {
    setButtonState({ start: false, stop: true, reset: false });
    sendTimerMessage('stop');
});
resetBtn.addEventListener('click', () => {
    setButtonState({ start: false, stop: true, reset: true });
    sendTimerMessage('reset');
});
