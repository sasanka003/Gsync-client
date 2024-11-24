"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

interface MessageProps {
  message: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isUser }) => {
  return (
    <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} my-2`}>
      {!isUser && (
        <img
          src="/images/Avatar.png"
          alt="Chatbot"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      {isUser && (
        <img
          src="/images/profile.png" 
          alt="User"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div
        className={`${
          isUser ? "bg-green-500 text-black" : "bg-gray-100 text-black"
        } p-3 rounded-lg max-w-sm shadow-md`}
      >
        {message}
      </div>
    </div>
  );
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true },
      ]);

      setTimeout(() => {
        const botReply = "Of course! here are the details of ......";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, isUser: false },
        ]);
      }, 1000);
      setInputValue(""); 
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-md p-6">
        {/* Chat area */}
        <div className="border rounded-lg flex-grow overflow-auto text-common bg-fill shadow-md p-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="flex mt-4 items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="How can I help you today?"
            className="flex-grow p-3 border border-green-500 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="p-2 ml-2 rounded-full bg-transparent border-none focus:outline-none"
          >
            <FiSend className="text-green-500 text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
