import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import style from './ChatBox.module.css';
import AutoText from './Chat/ChatBotAutoText/AutoText';
import SendMessage from './Chat/SendMessage/SendMessage';
import { SlOptions as Options } from 'react-icons/sl';
import UserMessage from './Chat/UserMessages/UserMessage';

const ChatBox = () => {
	const [userMessages, setUserMessages] = useState([]);
	const messagesEndRef = useRef(null);

	const handleSendMessage = (message) => {
		const newMessage = {
			text: message,
		};

		setUserMessages((prevMessages) => [...prevMessages, newMessage]);
	};
	useEffect(() => {
		scrollToBottom();
	}, [userMessages]);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className={style.chatBoxCont}>
			<div className={style.AllMessages}>
				<div className={style.autoText}>
					<AutoText />
				</div>
				<div className={style.userMessage}>
					{userMessages.map((message, index) => (
						<UserMessage
							key={index}
							message={message.text}
						/>
					))}
					<div ref={messagesEndRef} />
				</div>
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
