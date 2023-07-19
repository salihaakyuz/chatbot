import { socket } from './socket';

const sendMessage = (msg) => {
	socket.emit('send_message', { msg });
};

export { sendMessage };
