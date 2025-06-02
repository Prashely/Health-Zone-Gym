import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Two from "../../assets/images/bg1.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero min-h-screen relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Two})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="hero-content flex-col lg:flex-row mb-4 md:mb-0 relative z-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="md:text-5xl text-3xl text-white font-black">
            A School That Gives You More - Education & Excellence
            <span className="text-bgSecondary font-bold ml-1">
              Beyond Limits.
            </span>
          </h1>
          <p className="text-white md:text-xl py-3 md:px-24 lg:px-0 lg:py-6">
            Welcome to your next chapter, we are thrilled to have you join our
            school – a place where learning and growth go hand in hand. Please
            leave your contact details below and we'll reach out as soon as
            possible.
            <span className="text-bgSecondary font-bold"> No commitments.</span>
          </p>
        </div>
        <div>
          <div className="card w-full md:w-[370px] shrink-0 shadow-2xl bg-bgPrimary mb-0">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Jan Mokanzi"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="081 026 2271"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control mt-1">
                <button className="btn btn-primary bg-primary/55 text-white border-white">
                  Call Me
                </button>
              </div>
              <p className="text-xs text-center text-white font-light">
                Don’t worry, we won’t show your contact details to anyone.
              </p>
            </form>
          </div>
          <div className="w-full flex gap-5 justify-center text-white mb-2 md:mb-0 mt-2">
            <div className="text-center">
              <div className="flex gap-1 items-center">
                <span>
                  <BsPeopleFill />
                </span>
                <span className="font-black">600+</span>
              </div>
              <span>Learners</span>
            </div>
            <div className="border-l border-gray-500 h-auto"></div>
            <div className="text-center">
              <div className="flex gap-1 items-center">
                <span>
                  <BsPeopleFill />
                </span>
                <span className="font-black">26</span>
              </div>
              <span>Staff Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
