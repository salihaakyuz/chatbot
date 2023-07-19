const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
	cors: 'http://localhost:3001',
	method: ['GET', 'POST'],
});

//io connection
io.on('connection', (socket) => {
	console.log('User connected');

	socket.on('send_message', (data) => {
		socket.broadcast.emit('receive_message', data);
	});
});

server.listen(3030, () => console.log('Server is running'));
