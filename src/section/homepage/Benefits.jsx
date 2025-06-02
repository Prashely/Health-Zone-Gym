import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import One from "../../assets/images/jj.jpg";

const Benefits = () => {
  return (
    <section className="bg-primary text-white py-8 pl-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Text Content */}
        <div className="flex-1 md:pr-10 mt-14 md:mt-0">
          <p className="font-black tracking-tighter text-white">
            Dennis Matlhaba ll Secondary School
          </p>
          <h2 className="text-2xl text-left font-black mb-4 tracking-tighter">
            THE BEST SCHOOL IN THE
            <span className="md:text-left text-4xl block text-white">
              MOGALAKWENA DISTRICT.
            </span>
          </h2>
          <p className="md:w-[800px] text-lg pr-7 mb-8 text-left">
            Over the past five years, Dennis Matlhaba II Secondary School has
            demonstrated a consistent commitment to academic achievement.
            Notably, in 2021, the school achieved a pass rate of 88.9%, followed
            by 83.5% in 2022, and an impressive 92.5% in 2023 . These results
            reflect the school's dedication to improving learner outcomes and
            its resilience in the face of educational challenges.
          </p>
          <p className="md:w-[800px] text-lg pr-7 mb-8 text-left">
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
        {/* Image on the right */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={One}
            alt="Dennis Matlhaba School"
            className="rounded-xl shadow-lg max-w-xs md:max-w-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
