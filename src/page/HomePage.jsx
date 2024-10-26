import React from "react";
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
