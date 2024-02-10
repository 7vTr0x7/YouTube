import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateText(10),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-8/12 h-[400px] ml-10   p-2 border border-black rounded-xl bg-gray-100 overflow-y-scroll  flex flex-col-reverse">
      {chatMessages.map((message) => (
        <ChatMessage
          key={message.name}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
