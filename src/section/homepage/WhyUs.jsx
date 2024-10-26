import React, { useEffect, useState, useRef, useMemo } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/HZ18.png";
import Seven from "../../assets/images/HZ17.jpg";
import Eleven from "../../assets/images/HZ6.jpg";
import { BiDumbbell } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";

const WhyUs = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active card
  const carouselRef = useRef(null);

  // Define icons as memoized values to prevent re-renders
  const DumbbellIcon = useMemo(() => <BiDumbbell />, []);
  const GroupIcon = useMemo(() => <HiUserGroup />, []);
  const PriceIcon = useMemo(() => <IoMdPricetags />, []);

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
        Personal Training <span className="text-bgSecondary">+</span> Group
        classes <span className="text-bgSecondary">+</span> Affordable Rates
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
              title="Personal Trainer"
              description="We have coaches and personal trainers with a ton of experience ready to help you achieve all your body goals in time"
            />
          </div>
          <div id="item2" className="carousel-item" data-index="2" key="item2">
            <Reasons
              imageSrc={Seven}
              icon={GroupIcon}
              title="Group Classes"
              description="Want to stay motivated and consistent in your fitness Journey? Health Zone Gym offers a variety of group classes to help you stay consistent and reach your body goals."
            />
          </div>
          <div id="item3" className="carousel-item" data-index="3" key="item3">
            <Reasons
              imageSrc={Eleven}
              icon={PriceIcon}
              title="Variety of Plans"
              description="Are you a scholar, student, spouse, parent, or even a grandparent? Health Zone Gym offers a variety of plans that suit your budget."
            />
          </div>
        </div>
        <div className="lg:hidden flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="bg-white">
            {activeItem === 1 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-xl" />
            )}
          </a>
          <a href="#item2" className="bg-white">
            {activeItem === 2 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-xl" />
            )}
          </a>
          <a href="#item3" className="bg-white">
            {activeItem === 3 ? (
              <GoDotFill className="transition-all duration-200 ease-in-out text-xl text-bgPrimary" />
            ) : (
              <GoDot className="transition-all duration-200 ease-in-out text-xl" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
