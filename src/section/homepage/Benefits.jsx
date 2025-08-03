import React from "react";
import One from "../../assets/images/11.jpg";

const Benefits = () => {
  return (
    <section
      className="relative bg-cover bg-[center_35%] text-white py-16 px-6"
      style={{ backgroundImage: `url(${One})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start lg:items-center text-left lg:text-center">
        <p className="font-black tracking-tighter text-white text-base lg:text-xl mb-2">
          Dennis Matlhaba ll Secondary School
        </p>

        <h2 className="text-2xl lg:text-7xl font-black mb-4 lg:mb-10 tracking-tighter">
          THE BEST SCHOOL IN THE
          <span className="block text-white">MOGALAKWENA DISTRICT.</span>
        </h2>

        <p className="text-md lg:text-xl mb-10 max-w-3xl">
          Over the past five years, Dennis Matlhaba II Secondary School has
          demonstrated a consistent commitment to academic achievement. Notably,
          in 2021, the school achieved a pass rate of 88.9%, followed by 83.5%
          in 2022, and an impressive 92.5% in 2023. These results reflect the
          school's dedication to improving learner outcomes and its resilience
          in the face of educational challenges.
        </p>

        <p className="text-md lg:text-xl max-w-3xl">
          Under Principal Mokanzi's guidance, the school emphasizes a holistic
          approach to education, balancing academic rigor with the development
          of character and community values. This leadership has been
          instrumental in creating a supportive environment where learners are
          encouraged to strive for excellence. Dennis Matlhaba II Secondary
          School continues to be a pillar of the community, nurturing future
          leaders and contributing positively to the educational landscape of
          the Limpopo province.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
