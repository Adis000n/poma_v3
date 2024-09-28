const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const wsInstance = expressWs(app); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '')));

app.ws('/ws', (ws, req) => {
  ws.on('message', (message) => {
    console.log('Received message:', message);

    wsInstance.getWss().clients.forEach(client => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
