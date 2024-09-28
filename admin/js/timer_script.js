document.getElementById('stop_btn').disabled = true;
document.getElementById('reset_btn').disabled = true;
initializeWebSocket('ws://localhost:3000/ws', (message) => {
    console.log('Received:', message);
});
document.getElementById('start_btn').addEventListener('click', () => {
    document.getElementById('stop_btn').disabled = false;
    document.getElementById('reset_btn').disabled = false;
    document.getElementById('start_btn').disabled = true;
    timer = "start";
    const message = { timer };
    sendMessage(JSON.stringify(message));
});
document.getElementById('stop_btn').addEventListener('click', () => {
    document.getElementById('stop_btn').disabled = true;
    document.getElementById('reset_btn').disabled = false;
    document.getElementById('start_btn').disabled = false;
    timer = "stop";
    const message = { timer };
    sendMessage(JSON.stringify(message));
});
document.getElementById('reset_btn').addEventListener('click', () => {
    document.getElementById('stop_btn').disabled = true;
    document.getElementById('reset_btn').disabled = true;
    document.getElementById('start_btn').disabled = false;
    timer = "reset";
    const message = { timer };
    sendMessage(JSON.stringify(message));
});