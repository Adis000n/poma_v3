// Constants
const WS_URL = 'ws://localhost:3000/ws';

// Cached DOM elements
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const resetBtn = document.getElementById('reset_btn');

// Initialize WebSocket
initializeWebSocket(WS_URL, (message) => {
    console.log('Received:', message);
});

// Helper function to enable/disable buttons
function setButtonState({ start, stop, reset }) {
    startBtn.disabled = start;
    stopBtn.disabled = stop;
    resetBtn.disabled = reset;
}

// Helper function to send WebSocket messages
function sendTimerMessage(action) {
    const message = { timer: action };
    sendMessage(JSON.stringify(message));
}

// Initial button state
setButtonState({ start: false, stop: true, reset: true });

// Start button click event
startBtn.addEventListener('click', () => {
    setButtonState({ start: true, stop: false, reset: false });
    sendTimerMessage('start');
});

// Stop button click event
stopBtn.addEventListener('click', () => {
    setButtonState({ start: false, stop: true, reset: false });
    sendTimerMessage('stop');
});

// Reset button click event
resetBtn.addEventListener('click', () => {
    setButtonState({ start: false, stop: true, reset: true });
    sendTimerMessage('reset');
});
