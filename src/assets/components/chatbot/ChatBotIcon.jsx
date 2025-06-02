import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatbotIcon = () => {
  return (
    <a
      href="https://wa.me/27810262271?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20school."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center">
        {/* Glowing effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-lg animate-pulse"></span>
        {/* Icon button */}
        <span className="relative flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-2xl border-4 border-green-500 group-hover:scale-110 transition-transform duration-200">
          <FaWhatsapp className="text-4xl text-green-600" />
        </span>
        {/* Notification Badge */}
        <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
      </div>
      {/* Tooltip on hover */}
      <span className="absolute right-20 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default ChatbotIcon;
