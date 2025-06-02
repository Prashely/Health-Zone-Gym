import React, { useEffect, useState, useRef, useMemo } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/vice.jpg";
import Seven from "../../assets/images/yo.jpg";
import Eleven from "../../assets/images/bg3.jpg";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAppleWhole } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const WhyUs = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active card
  const carouselRef = useRef(null);

  // Define icons as memoized values to prevent re-renders
  const DumbbellIcon = useMemo(() => <HiAcademicCap />, []);
  const GroupIcon = useMemo(() => <FaAppleWhole />, []);
  const PriceIcon = useMemo(() => <AiOutlineSafetyCertificate />, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            // Update activeItem only if it changes
            if (index !== activeItem) {
              setActiveItem(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Adjusted threshold to reduce observer triggers
    );

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [activeItem]);

  return (
    <section className="w-full flex flex-col items-center justify-center my-6 ">
      <h2 className="text-xl lg:text-2xl text-bgPrimary font-semibold text-center mb-4 tracking-tighter ">
        Why Choose Dennis Matlhaba Secondary School?
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div
          ref={carouselRef}
          className="carousel carousel-center lg:flex lg:justify-center rounded-box space-x-6 p-4"
        >
          <div id="item1" className="carousel-item" data-index="1" key="item1">
            <Reasons
              imageSrc={Twelve}
              icon={DumbbellIcon}
              title="Commitment to Academic Excellence"
              description="We maintain high academic standards and provide dedicated support to help every learner succeed—both inside the classroom and beyond."
            />
          </div>
          <div id="item2" className="carousel-item" data-index="2" key="item2">
            <Reasons
              imageSrc={Seven}
              icon={GroupIcon}
              title="Holistic Development"
              description="Our school nurtures not just the mind, but also character and confidence through sports, leadership programs, and community engagement."
            />
          </div>
          <div id="item3" className="carousel-item" data-index="3" key="item3">
            <Reasons
              imageSrc={Eleven}
              icon={PriceIcon}
              title="A Safe & Supportive Environment"
              description="Dennis Matlhaba is more than a school—it’s a second home. We foster a caring atmosphere where learners feel safe, respected, and empowered to grow."
            />
          </div>
        </div>
        <div className="lg:hidden flex w-full justify-center gap-2 py-2 bg-white/80 rounded-lg shadow">
          <a href="#item1" className="rounded-full p-1">
            {activeItem === 1 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary/60" />
            )}
          </a>
          <a href="#item2" className="rounded-full p-1">
            {activeItem === 2 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary/60" />
            )}
          </a>
          <a href="#item3" className="rounded-full p-1">
            {activeItem === 3 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-2xl text-bgPrimary/60" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
