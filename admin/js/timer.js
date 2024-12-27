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
    clearInterval(timerInterval);
    
    if (currentTime > 5) {
        timerInterval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                time.innerText = currentTime;
                
                if (currentTime === 5) {
                    clearInterval(timerInterval);

                    timerInterval = setInterval(() => {
                        if (currentTime > 0) {
                            currentTime -= 0.1;
                            currentTime = Math.round(currentTime * 10) / 10;
                            time.innerText = currentTime.toFixed(1);
                        } else {
                            clearInterval(timerInterval);
                        }
                    }, 100);
                }
            }
        }, 1000);
    } else {
        timerInterval = setInterval(() => {
            if (currentTime > 0) {
                currentTime -= 0.1;
                currentTime = Math.round(currentTime * 10) / 10;
                time.innerText = currentTime.toFixed(1);
            } else {
                clearInterval(timerInterval);
            }
        }, 100);
    }
    
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
    const wasUnderFiveSeconds = currentTime <= 5;
    currentTime = Math.floor(currentTime) + 20; // First round current time, then add 20
    time.innerText = currentTime;
    
    // If timer is running (stop button is enabled), restart with correct interval
    if (!stopBtn.disabled) {
        clearInterval(timerInterval);
        // Set new interval with 1-second steps since we're now above 5 seconds
        timerInterval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                time.innerText = currentTime;
                
                if (currentTime === 5) {
                    clearInterval(timerInterval);
                    // Switch to decimal counting
                    timerInterval = setInterval(() => {
                        if (currentTime > 0) {
                            currentTime -= 0.1;
                            currentTime = Math.round(currentTime * 10) / 10;
                            time.innerText = currentTime.toFixed(1);
                        } else {
                            clearInterval(timerInterval);
                        }
                    }, 100);
                }
            }
        }, 1000);
    }
    sendTimerMessage('add');
});
