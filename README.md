# websockets-demo
node index.js

# # from server
connection.send("message");

# # from client
let ws = new WebSocket("ws://localhost:9000");
ws.onmessage = message => console.log(`Message from server ${message.data}`);
ws.send('hey');
