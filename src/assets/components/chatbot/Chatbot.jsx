// Chatbot.jsx
import React, { useState, useEffect } from "react";
import { CiLogout } from "react-icons/ci";

const Chatbot = () => {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showPromoOptions, setShowPromoOptions] = useState(false);
  const [showReviewOption, setShowReviewOption] = useState(false);
  const [showPricingMessage, setShowPricingMessage] = useState(false);

  const handleMainClick = () => {
    setShowOptions(true);
    setShowPromoOptions(false);
    setShowReviewOption(false);
    setShowPricingMessage(false);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case "promotions":
        setShowPromoOptions(true);
        setShowOptions(false);
        break;
      case "pricing":
        setShowPricingMessage(true);
        setShowOptions(false);
        break;
      case "whatsapp":
        window.location.href =
          "https://api.whatsapp.com/send?phone=%2B27824924196&text=Hello,%20How%20are%20you?";
        break;
      case "reviews":
        setShowReviewOption(true);
        setShowOptions(false);
        break;
      default:
        break;
    }
  };

  const handlePromoClick = (promo) => {
    const promoLinks = {
      "November Promo": "src/assets/images/promos/November.png",
      "December Promo": "src/assets/images/promos/December.png",
      "2024 Promo": "src/assets/images/promos/2024.jpg",
    };
    window.open(promoLinks[promo], "_blank");
  };

  return (
    <div className="fixed bottom-20 right-4 w-72 bg-bgPrimary p-4 rounded-xl shadow-lg z-50">
      {/* Initial Message */}
      {showInitialMessage && (
        <div>
          <div className="text-left">
            <span className="bg-white text-bgPrimary p-2 rounded inline-block">
              Hey, Welcome to the Health Zone Online Assistance! We are
              currently running promotions, click{" "}
              <strong className="ml-1">Main Menu</strong>
              below for more details.
            </span>
          </div>
          <button
            onClick={() => {
              setShowInitialMessage(false);
              setShowOptions(true);
            }}
            className="block font-bold w-full p-2 bg-bgSecondary text-bgPrimary my-2 rounded"
          >
            Main Menu
          </button>
        </div>
      )}

      {/* Main Options */}
      {showOptions && (
        <div className="my-2 bg-white p-3 rounded-lg">
          <button
            className="block font-semibold w-full p-2 bg-bgSecondary text-bgPrimary mb-2 rounded"
            onClick={() => handleOptionClick("whatsapp")}
          >
            Chat on WhatsApp
          </button>
          <div className="flex gap-1">
            <button
              className="block font-semibold w-full p-2 bg-bgSecondary text-bgPrimary mb-2 rounded"
              onClick={() => handleOptionClick("promotions")}
            >
              Promotions
            </button>
            <button
              className="block font-semibold w-full p-2 bg-bgSecondary text-bgPrimary mb-2 rounded"
              onClick={() => handleOptionClick("pricing")}
            >
              Pricing
            </button>
          </div>
          <button
            className="block font-semibold w-full p-2 bg-bgSecondary text-bgPrimary mb-2 rounded"
            onClick={() => handleOptionClick("reviews")}
          >
            Reviews
          </button>
        </div>
      )}

      {/* Promotions Options */}
      {showPromoOptions && (
        <>
          <button
            onClick={() => handlePromoClick("November Promo")}
            className="block w-full p-2 bg-pink-600 text-white mb-2 rounded"
          >
            November Promo
          </button>
          <button
            onClick={() => handlePromoClick("December Promo")}
            className="block w-full p-2 bg-orange-600 text-white mb-2 rounded"
          >
            December Promo
          </button>
          <button
            onClick={() => handlePromoClick("2024 Promo")}
            className="block w-full p-2 bg-teal-600 text-white mb-2 rounded"
          >
            2024 Promo
          </button>
          <button
            onClick={handleMainClick}
            className="flex justify-center items-center gap-1 font-bold w-full p-2 bg-bgSecondary text-bgPrimary mt-2 rounded"
          >
            <CiLogout className="font-black" />
            Back
          </button>
        </>
      )}

      {/* Review Option */}
      {showReviewOption && (
        <>
          <p className="bg-white text-bgPrimary rounded my-2 p-1">
            Your feedback will be highly appreciated.
          </p>
          <button
            className="block w-full p-2 bg-purple-600 text-white mb-2 rounded"
            onClick={() => {
              window.location.href = "https://tinyurl.com/3n6zb7fa";
            }}
          >
            Review
          </button>
          <button
            onClick={handleMainClick}
            className="flex justify-center items-center gap-1 font-bold w-full p-2 bg-bgSecondary text-bgPrimary mt-2 rounded"
          >
            <CiLogout className="font-black" />
            Back
          </button>
        </>
      )}

      {/* Pricing Option */}
      {showPricingMessage && (
        <>
          <p className="bg-white text-bgPrimary font-semibold rounded my-2 p-1">
            If you need more information about our pricing please reach out to
            us on WhatsApp.
          </p>
          <button
            onClick={() => {
              window.open("src/assets/images/pricing/prices.jpg", "_blank");
            }}
            className="block w-full p-2 bg-green-600 text-white mb-2 rounded"
          >
            Pricing
          </button>
          <button
            onClick={handleMainClick}
            className="flex justify-center items-center gap-1 font-bold w-full p-2 bg-bgSecondary text-bgPrimary mt-2 rounded"
          >
            <CiLogout className="font-black" />
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default Chatbot;
