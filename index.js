const http = require('http');
const WebSocketServer = require('websocket').server

const port = 9000;

const httpServer = http.createServer((req, res) => {
    console.log('we received a request!');
});

const webSocket = new WebSocketServer({ httpServer });

function hey(){ console.log("hey") }

const sendHey = (connection) => {
    connection.send("hey");
    setTimeout(() => sendHey(connection), 5000);
}


webSocket.on('request', req => {
    const connection = req.accept(null, req.origin);

    connection.on('open', () => console.log('OPENED!'));
    connection.on('close', () => console.log('CLOSED!'));

    connection.on('message', (message) => {
        console.log(`Received message ${message.utf8Data}`);
    });

    sendHey(connection);
});

httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});