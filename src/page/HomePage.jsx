import React from "react";
import NavBar from "../assets/components/ui/NavBar";
import Footer from "../assets/components/ui/Footer";
import HeroSection from "../Sections/Homepage/HeroSection";
import WhyUs from "../Sections/Homepage/WhyUs";
import Benefits from "../Sections/Homepage/Benefits";
import FAQs from "../Sections/HomePage/FAQs";
import ContactUs from "../Sections/HomePage/ContactUs";
import Testimonials from "../Sections/HomePage/Testimonials";
import Pricing from "../Sections/Homepage/Pricing";
import ImageGrid from "../Sections/HomePage/ImageGrind";
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav>
        <NavBar />
      </nav>
      <main className="flex-grow">
        <HeroSection />
        <WhyUs />
        <Benefits />
        <Pricing />
        <Testimonials />
        <ContactUs />
        <ImageGrid />
        <FAQs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
