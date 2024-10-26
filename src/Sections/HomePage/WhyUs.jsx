import React, { useEffect, useState, useRef } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/12.jpg";
import Seven from "../../assets/images/7.jpg";
import Eleven from "../../assets/images/11.jpg";
import { BiDumbbell } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";

const WhyUs = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active card
  const carouselRef = useRef(null);

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
      { threshold: 0.6 }
    );

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
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
          <div id="item1" className="carousel-item" data-index="1">
            <Reasons
              imageSrc={Twelve}
              icon={<BiDumbbell />}
              title="Personal Trainer"
              description="We have coaches with a ton of experience ready to help you achieve all your body goals"
            />
          </div>
          <div id="item2" className="carousel-item" data-index="2">
            <Reasons
              imageSrc={Seven}
              icon={<HiUserGroup />}
              title="Group Classes"
              description="Want to stay motivated and consistent in your fitness Journey, Your Gym Name offers a variety of group classes to help you stay consistent and reach your body goals"
            />
          </div>
          <div id="item3" className="carousel-item" data-index="3">
            <Reasons
              imageSrc={Eleven}
              icon={<IoMdPricetags />}
              title="Variety of Plans"
              description="Are you scholar, student, spouse, parent or even a grandparent? Your Gym Name offers a variety of plans that suit your your budget."
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
