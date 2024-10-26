import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Two from "../../assets/images/2.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero min-h-screen relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Two})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="hero-content flex-col lg:flex-row mb-4 md:mb-0 relative z-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="md:text-5xl text-3xl text-white font-black">
            A Gym That Gives You More - Fitness Beyond Limits.
          </h1>
          <p className="text-white md:text-xl py-3 md:px-24 lg:px-0 lg:py-6">
            Welcome to your next chapter, we are thrilled to have you join us -
            best gym in town. Please leave your contacts below and we'll get in
            touch asap. No commitments.
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
                  placeholder="Prashely Maluleke"
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
                  placeholder="068 392 8066"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control mt-1">
                <button className="btn btn-primary bg-bgSecondary text-bgPrimary">
                  Call Me
                </button>
              </div>
              <p className="text-xs text-center text-white font-light">
                Don’t worry, we won’t show your contact details to anyone.
              </p>
            </form>
          </div>
          <div className="w-full flex gap-5 justify-center text-white mb-2 md:mb-0 mt-2">
            <div className="text-center ">
              <div className="flex gap-1 items-center">
                <span>
                  <FcGoogle />
                </span>
                <span className="font-black">4/5</span>
                <span>
                  <FaStar className="text-yellow-500" />
                </span>
              </div>
              <span>Google</span>
            </div>
            <div className="border-l border-gray-500 h-auto"></div>
            <div className="text-center">
              <div className="flex gap-1 items-center">
                <span>
                  <BsPeopleFill />
                </span>
                <span className="font-black">1200+</span>
              </div>
              <span>Members</span>
            </div>
            <div className="border-l border-gray-500 h-auto"></div>
            <div className="text-center">
              <div className="flex gap-1 items-center">
                <span>
                  <IoLocationSharp />
                </span>
                <span className="font-black">3</span>
              </div>
              <span>Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
