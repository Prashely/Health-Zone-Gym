import React, { useState } from "react";
import ChatButton from "./ChatButton";
import UserResponse from "./UserResponse";

const ChatWindow = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState("welcome");

  const handleOptionClick = (option) => {
    if (option === "main") setCurrentStep("mainMenu");
    else setCurrentStep(option);
  };

  return (
    <div className="fixed bottom-20 right-4 w-64 bg-gray-100 p-4 rounded-lg shadow-lg">
      {currentStep === "welcome" && (
        <>
          <p>
            Hey, Welcome to the Health Zone Online Assistance. Click "main"
            below.
          </p>
          <UserResponse
            label="main"
            onClick={() => handleOptionClick("main")}
          />
        </>
      )}
      {currentStep === "mainMenu" && (
        <>
          <ChatButton
            label="Promotions"
            onClick={() => handleOptionClick("promotions")}
          />
          <ChatButton
            label="Pricing"
            onClick={() => handleOptionClick("pricing")}
          />
          <ChatButton
            label="Chat on WhatsApp"
            onClick={() => handleOptionClick("whatsapp")}
          />
          <ChatButton
            label="Reviews"
            onClick={() => handleOptionClick("reviews")}
          />
        </>
      )}
      {/* Additional steps for different user choices */}
      {currentStep === "promotions" && (
        <>
          <ChatButton
            label="November Promo"
            onClick={() => console.log("Download November Promo")}
          />
          <ChatButton
            label="December Promo"
            onClick={() => console.log("Download December Promo")}
          />
          <UserResponse
            label="main"
            onClick={() => handleOptionClick("mainMenu")}
          />
        </>
      )}
    </div>
  );
};

export default ChatWindow;
