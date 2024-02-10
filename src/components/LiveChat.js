import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-8/12 h-[400px] ml-10   p-2 border border-black rounded-xl bg-gray-100">
      <div className="p-2">
        <h1 className="font-bold">Live Chat</h1>
      </div>
      <ChatMessage name="vTr0x" message="hi!" />
      <ChatMessage name="vTr0x" message="hi!" />
      <ChatMessage name="vTr0x" message="hi!" />
      <ChatMessage name="vTr0x" message="hi!" />
      <ChatMessage name="vTr0x" message="hi!" />
    </div>
  );
};

export default LiveChat;
