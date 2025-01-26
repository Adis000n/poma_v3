let ws;
let messageQueue = [];
let isConnected = false;
let reconnectInterval = 1000; 
let maxReconnectInterval = 5000; 
let reconnectAttempts = 0;

SERVER_RUNNING = false;
server_status(false);

function showToast(type, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        width: '400px',
        padding: '1.25em',
        background: type === 'success' ? '#4CAF50' : type === 'warning' ? '#ff3333' : '#333',
        color: type === 'success' ? '#000' : '#fff',
        html: `<h1 style="margin: 0; font-size: 1.5em;">${message}</h1>`
    });

    Toast.fire({
        icon: type,
        title: ''
    });
}

function connectWebSocket(url, onMessageCallback) {
    ws = new WebSocket(url);

    ws.onopen = () => {
        console.log('Connected to WebSocket');
        isConnected = true;
        reconnectInterval = 1000; 
        reconnectAttempts = 0; 
        showToast('success', 'WebSocket połączony');
        SERVER_RUNNING =true;
        server_status(true);

        // Send any queued messages
        while (messageQueue.length > 0) {
            ws.send(messageQueue.shift());
        }
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
        SERVER_RUNNING = false;
        server_status(false);
        isConnected = false;
        showToast('warning', 'WebSocket odłączony');
        handleReconnect(url, onMessageCallback);
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        showToast('error', 'WebSocket Error');
        ws.close(); 
    };

    ws.onmessage = (event) => {
        if (onMessageCallback) {
            onMessageCallback(event.data);
        }
    };
}

function sendMessage(message) {
    if (isConnected) {
        ws.send(message);
    } else {
        messageQueue.push(message);
    }
}

function initializeWebSocket(url, onMessageCallback) {
    connectWebSocket(url, onMessageCallback);
}

function handleReconnect(url, onMessageCallback) {
    if (reconnectAttempts < 20) { 
        setTimeout(() => {
            reconnectAttempts++;
            reconnectInterval = Math.min(reconnectInterval * 2, maxReconnectInterval);
            console.log(`Attempting to reconnect... (Attempt #${reconnectAttempts})`);
            connectWebSocket(url, onMessageCallback);
        }, reconnectInterval);
    } else {
        console.error('Max reconnect attempts reached. Connection failed.');
    }
}
