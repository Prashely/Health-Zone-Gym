// ChatbotWrapper.jsx
import React, { useState } from "react";
import ChatbotIcon from "./ChatBotIcon";
import Chatbot from "./Chatbot";

const ChatbotWrapper = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <ChatbotIcon onClick={toggleChatbot} isChatbotOpen={isChatbotOpen} />
      <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
    </>
  );
};

export default ChatbotWrapper;
