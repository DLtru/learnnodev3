import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
let messages = [];
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    data = JSON.parse(data);
    console.log(data);
    messages.push(data);
    wss.clients.forEach(client => {
        if(client.readyState === client.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
  });

  ws.send(JSON.stringify({type: 'messages', messages}));
});