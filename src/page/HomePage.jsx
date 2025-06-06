import React, { useState } from "react";
import NavBar from "../assets/components/ui/NavBar";
import Footer from "../assets/components/ui/Footer";
import HeroSection from "../section/homepage/HeroSection";
import WhyUs from "../section/homepage/WhyUs";
import Benefits from "../section/homepage/Benefits";
import FAQs from "../section/homepage/FAQs";
import ContactUs from "../section/homepage/ContactUs";
import Testimonials from "../section/homepage/Testimonials";
import Pricing from "../section/homepage/Pricing";
import ImageGrid from "../section/homepage/ImageGrind";
import ChatbotIcon from "../assets/components/chatbot/ChatBotIcon";
import Chatbot from "../assets/components/chatbot/Chatbot";

const HomePage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className=" bg-white w-screen">
      <nav>
        <NavBar />
      </nav>
      <main className="flex-grow">
        <HeroSection />
        <WhyUs />
        <Benefits />
        <ImageGrid />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>

      {/* Chatbot Icon - click to toggle the chatbot display */}
      <ChatbotIcon onClick={() => setShowChatbot(!showChatbot)} />

      {/* Conditionally render Chatbot when showChatbot is true */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
};

export default HomePage;
