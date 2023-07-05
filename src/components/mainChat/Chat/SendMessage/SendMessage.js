import React, { useState } from "react";
import style from "./SendMessage.module.css";
import { RiSendPlaneLine as Send } from "react-icons/ri";
const SendMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendClick = () => {
    onSendMessage(message);
    setMessage("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };
  return (
    <div className={style.inputCont}>
      <input
        type="text"
        style={{ width: "100%" }}
        placeholder="Send a message"
        className={style.miuv}
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Send onClick={handleSendClick} />
    </div>
  );
};

export default SendMessage;
