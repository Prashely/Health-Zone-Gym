// ChatbotIcon.jsx
import React from "react";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";

const ChatbotIcon = ({ onClick }) => {
  return (
    <div
      className="fixed bottom-4 right-4 bg-bgPrimary text-bgSecondary text-5xl rounded-xl p-1 pb-0 shadow-lg cursor-pointer z-50"
      onClick={onClick}
    >
      {/* Chat Icon */}
      <HiMiniChatBubbleBottomCenterText />

      {/* Notification Badge */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-bgSecondary rounded-full border-2 border-bgPrimary animate-bounce"></span>
    </div>
  );
};

export default ChatbotIcon;
