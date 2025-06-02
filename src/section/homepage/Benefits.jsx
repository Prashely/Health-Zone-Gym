import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import One from "../../assets/images/HZ1.jpg";

const Benefits = () => {
  return (
    <section className="bg-primary text-white py-8">
      {/* Semi-transparent overlay */}
      <div className="relative z-10 flex flex-col md:justify-center md:items-center md:text-center items-start ml-6 mt-14">
        <div>
          <p className="font-black tracking-tighter text-white">
            Dennis Matlhaba ll Secondary School
          </p>
          <h2 className="text-2xl text-left font-black mb-4 tracking-tighter">
            THE BEST SCHOOL IN THE
            <span className="md:text-center text-4xl block text-primary/10">
              MOGALAKWENA DISTRICT.
            </span>
          </h2>
        </div>
        <div>
          <p className="md:w-[800px] text-lg pr-7 mb-8">
            Over the past five years, Dennis Matlhaba II Secondary School has
            demonstrated a consistent commitment to academic achievement.
            Notably, in 2021, the school achieved a pass rate of 88.9%, followed
            by 83.5% in 2022, and an impressive 92.5% in 2023 . These results
            reflect the school's dedication to improving learner outcomes and
            its resilience in the face of educational challenges.
          </p>
          <p className="md:w-[800px] text-lg pr-7 mb-8">
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
        {/* Call to Action */}
        <a
          className="btn bg-bgSecondary text-bgPrimary px-10 py-4 font-black mt-3"
          href="#contact"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default Benefits;
