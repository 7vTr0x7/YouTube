import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

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
    <>
      <div className="w-8/12 h-[400px] ml-10   p-2 border border-black rounded-xl bg-gray-100 overflow-y-scroll  flex flex-col-reverse">
        {chatMessages.map((message) => (
          <ChatMessage
            key={message.name}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>

      <form
        className="w-8/12 p-2 ml-10  my-2 border border-black rounded-xl"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "vtrox",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}>
        <input
          className="w-9/12 px-2 font-semibold "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="font-semibold text-xl bg-gray-100 ml-4 px-2 rounded-xl">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
