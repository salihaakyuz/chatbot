import my from './UserMessage.module.css';
const UserMessage = ({ message }) => {
	return (
		<div className={my.All}>
			<div className={my.userMessageContainer}>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default UserMessage;
