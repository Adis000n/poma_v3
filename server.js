const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const wsInstance = expressWs(app); 

let clientCounter = 0;  // Add counter at the top level

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '')));

app.ws('/ws', (ws, req) => {
  let isAlive = true;
  const clientId = ++clientCounter;  
  console.log(`Client ${clientId} connected`);
  
  const pingInterval = setInterval(() => {
    if (!isAlive) {
      console.log(`Client ${clientId} not responding - terminating`);
      ws.terminate();
      return;
    }
    
    isAlive = false;
    console.log(`Sending ping to client ${clientId}`);
    ws.ping();
  }, 30000); 

  ws.on('pong', () => {
    console.log(`Received pong from client ${clientId}`);
    isAlive = true;
  });

  ws.on('message', (message) => {
    console.log('Received message:', message);
    wsInstance.getWss().clients.forEach(client => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clearInterval(pingInterval);
    console.log('WebSocket connection closed');
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
