import { socket } from './socket';
import { useEffect, useState } from 'react';

const useReceiveMessage = () => {
	const [receivedMessage, setReceivedMessage] = useState('');
	useEffect(() => {
		socket.on('receive_message', (data) => {
			setReceivedMessage(data.message);
		});
	}, [socket]);
	return receivedMessage;
};

export { useReceiveMessage };
