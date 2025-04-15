import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

let messages = [];

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/messages', (req, res) => {
    let filteredMessages = messages.filter(msg => msg.date > new Date(req.query.date ?? null));
    res.json(filteredMessages);
});

app.get('/messages/longpoll', async (req, res) => {
    let filteredMessages = [];
    do {
        await sleep(1000);
        filteredMessages = messages.filter(msg => msg.date > new Date(req.query.date ?? null));
    } while(filteredMessages.length === 0)
    
    res.json(filteredMessages);
});


app.post('/messages', (req, res) => {
    messages.push({ message: req.body.message, date: new Date()});
    res.json(req.body);
});
  


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});