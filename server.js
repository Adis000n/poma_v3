const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const wsInstance = expressWs(app); 

let clientCounter = 0;  // Add counter at the top level

// Add connection tracking
const connectedClients = {
  admin: false,
  board: false,
  questions: false
};

function broadcastConnectionStatus() {
  const statusMessage = JSON.stringify({
    type: 'connectionStatus',
    status: connectedClients
  });
  
  wsInstance.getWss().clients.forEach(client => {
    if (client.readyState === client.OPEN) {
      client.send(statusMessage);
    }
  });
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '')));

app.ws('/ws', (ws, req) => {
  let isAlive = true;
  let clientId = ++clientCounter;
  let clientName = null;
  
  console.log(`Client ${clientId} connected`);
  
  const pingInterval = setInterval(() => {
    if (!isAlive) {
      console.log(`Client ${clientName || clientId} not responding - terminating`);
      ws.terminate();
      return;
    }
    
    isAlive = false;
    console.log(`Sending ping to client ${clientName || clientId}`);
    ws.ping();
  }, 30000);

  ws.on('pong', () => {
    console.log(`Received pong from client ${clientName || clientId}`);
    isAlive = true;
  });

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === 'identification') {
        clientName = data.clientName;
        connectedClients[clientName] = true;
        console.log(`Client ${clientId} identified as ${clientName}`);
        broadcastConnectionStatus();
        return;
      }
    } catch (e) {
      // If message is not JSON or doesn't have type field, treat as regular message
    }

    console.log(`Received message from ${clientName || clientId}:`, message);
    wsInstance.getWss().clients.forEach(client => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clearInterval(pingInterval);
    if (clientName) {
      connectedClients[clientName] = false;
      broadcastConnectionStatus();
    }
    console.log(`Client ${clientName || clientId} disconnected`);
  });
});

// Add test endpoint
app.ws('/test', (ws, req) => {
  console.log('Test client connected');
  ws.send('Test connection established');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
