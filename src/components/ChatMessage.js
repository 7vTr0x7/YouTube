import React from "react";
import userIcon from "../utils/images/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img alt="user" src={userIcon} className="h-6" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
