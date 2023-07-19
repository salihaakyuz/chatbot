import React, { useState, useRef, useEffect } from 'react';
import style from './ChatBox.module.css';
import AutoText from './Chat/ChatBotAutoText/AutoText';
import SendMessage from './Chat/SendMessage/SendMessage';
import { SlOptions as Options } from 'react-icons/sl';
import UserMessage from './Chat/UserMessages/UserMessage';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3030');

const ChatBox = () => {
	const [receivedMessages, setReceivedMessages] = useState([]);
	const [userMessages, setUserMessages] = useState([]);
	const [userMessageQueue, setUserMessageQueue] = useState([]);
	const messagesEndRef = useRef(null);

	const handleSendMessage = (message) => {
		const newMessage = {
			text: message,
			timestamp: Date.now(),
			sender: 'client',
			messageId: generateUniqueId(),
		};
		setUserMessageQueue((prevQueue) => [...prevQueue, newMessage]);
	};

	useEffect(() => {
		const receiveMessageHandler = (data) => {
			const newReceivedMessage = {
				...data.newMessage,
				sender: 'server',
			};
			setReceivedMessages((prevReceivedMessages) => [
				newReceivedMessage,
				...prevReceivedMessages,
			]);
		};

		socket.on('receive_message', receiveMessageHandler);

		return () => {
			socket.off('receive_message', receiveMessageHandler);
		};
	}, []);

	useEffect(() => {
		const processUserMessageQueue = () => {
			if (userMessageQueue.length > 0) {
				const messageToSend = userMessageQueue[0];
				socket.emit('send_message', { newMessage: messageToSend });
				setUserMessageQueue((prevQueue) => prevQueue.slice(1));
				setUserMessages((prevMessages) => [...prevMessages, messageToSend]);
			}
		};
		processUserMessageQueue();
	}, [userMessageQueue]);

	useEffect(() => {
		scrollToBottom();
	}, [userMessages, receivedMessages]);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const generateUniqueId = () => {
		return (
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	};

	// Combine and sort both received and user messages based on timestamp
	const allMessages = [...receivedMessages, ...userMessages].sort(
		(a, b) => a.timestamp - b.timestamp
	);

	return (
		<div className={style.chatBoxCont}>
			<div className={style.AllMessages}>
				<div className={style.autoText}>
					{allMessages.map((message, index) => {
						if (message.sender === 'server') {
							return (
								<AutoText
									key={index}
									text={message.text}
								/>
							);
						} else if (message.sender === 'client') {
							return (
								<UserMessage
									key={message.messageId}
									message={message.text}
								/>
							);
						}
					})}
				</div>
				<div ref={messagesEndRef} />
			</div>

			<span className={style.options}>
				<Options />
			</span>
			<div className={style.sendMessage}>
				<SendMessage onSendMessage={handleSendMessage} />
			</div>
		</div>
	);
};

export default ChatBox;
