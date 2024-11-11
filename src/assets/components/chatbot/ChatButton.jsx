import React from "react";

const ChatButton = ({ label, onClick }) => {
  return (
    <button
      className="block w-full p-2 bg-blue-500 text-white mb-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ChatButton;
