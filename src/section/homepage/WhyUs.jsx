import React, { useEffect, useState, useRef, useMemo } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAppleWhole } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

import Reasons from "../../assets/components/ui/Reasons";
import ImageOne from "../../assets/images/some.jpg";
import ImageTwo from "../../assets/images/9.jpg";
import ImageThree from "../../assets/images/yo.jpg";

const WhyUs = () => {
  const [activeItem, setActiveItem] = useState(1);
  const carouselRef = useRef(null);

  const icons = useMemo(
    () => ({
      academic: <HiAcademicCap />,
      holistic: <FaAppleWhole />,
      safety: <AiOutlineSafetyCertificate />,
    }),
    []
  );

  const reasonsData = [
    {
      id: 1,
      image: ImageOne,
      icon: icons.academic,
      title: "Commitment to Academic Excellence",
      description:
        "We maintain high academic standards and provide dedicated support to help every learner succeed—both inside the classroom and beyond.",
    },
    {
      id: 2,
      image: ImageTwo,
      icon: icons.holistic,
      title: "Holistic Development",
      description:
        "Our school nurtures not just the mind, but also character and confidence through sports, leadership programs, and community engagement.",
    },
    {
      id: 3,
      image: ImageThree,
      icon: icons.safety,
      title: "A Safe & Supportive Environment",
      description:
        "Dennis Matlhaba is more than a school—it’s a second home. We foster a caring atmosphere where learners feel safe, respected, and empowered to grow.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            if (index !== activeItem) setActiveItem(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeItem]);

  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-xl lg:text-2xl text-bgPrimary font-semibold text-center mb-4 tracking-tighter">
        Why Choose Dennis Matlhaba Secondary School?
      </h2>

      <div className="w-full flex flex-col justify-center">
        <div
          ref={carouselRef}
          className="flex flex-col lg:flex-row lg:justify-center space-y-6 lg:space-y-0 lg:space-x-6 p-4"
        >
          {reasonsData.map(({ id, image, icon, title, description }) => (
            <div className="carousel-item" data-index={id} key={id}>
              <Reasons
                imageSrc={image}
                icon={icon}
                title={title}
                description={description}
              />
            </div>
          ))}
        </div>

        <div className="lg:hidden flex justify-center gap-2 py-2 bg-white/80 rounded-lg shadow mt-4">
          {reasonsData.map(({ id }) => (
            <a href={`#item${id}`} key={id} className="rounded-full p-1">
              {activeItem === id ? (
                <GoDotFill className="text-2xl text-bgPrimary transition-all duration-200" />
              ) : (
                <GoDot className="text-2xl text-bgPrimary/60 transition-all duration-200" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
