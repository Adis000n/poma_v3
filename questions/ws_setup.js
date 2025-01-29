let ws;
let messageQueue = [];
let isConnected = false;
let reconnectInterval = 1000;
let maxReconnectInterval = 5000;
let reconnectAttempts = 0;

function connectWebSocket(url, onMessageCallback) {
    ws = new WebSocket(url);

    ws.onopen = () => {
        console.log('Connected to WebSocket');
        isConnected = true;
        reconnectInterval = 1000;
        reconnectAttempts = 0;

        // Send client identification
        ws.send(JSON.stringify({
            type: 'identification',
            clientName: 'questions'
        }));

        while (messageQueue.length > 0) {
            ws.send(messageQueue.shift());
        }
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
        isConnected = false;
        handleReconnect(url, onMessageCallback);
    };

    ws.onmessage = (event) => {
        if (onMessageCallback) {
            onMessageCallback(event.data);
        }
    };
    
    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.close();
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