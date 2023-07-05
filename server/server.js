const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

users = [];
connections = [];
server.listen(process.env.PORT || 3000);
console.log(`Server running on port`);
const path = require('path');
const chatProjectPath = path.join(__dirname, '..');
app.get('/', (req, res) => {
	res.sendFile(chatProjectPath + '/index.html');
});
