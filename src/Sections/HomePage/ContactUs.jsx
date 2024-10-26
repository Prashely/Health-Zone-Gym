import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-8 bg-white">
      <h2 className="font-bold text-xl lg:text-3xl text-bgPrimary my-6 tracking-tighter ">
        Your Fitness Journey Starts Here.
      </h2>
      <div className="bg-bgPrimary  p-4 rounded-2xl w-[95vw] lg:w-[1000px]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 md:mb-8 overflow-hidden">
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <div className=" w-full p-6 mr-2 bg-bgSecondary dark:bg-buttonIcons rounded-2xl">
                <h1 className="text-4xl sm:text-5xl text-bgPrimary font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-bgPrimary mt-2 tracking-tight">
                  Fill in the form and let us get in touch
                </p>

                <div className="flex items-center mt-8 text-bgPrimary">
                  <SlLocationPin className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-tight font-semibold ">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>
                <div className="flex items-center mt-4  text-bgPrimary">
                  <FiPhone className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-tight font-semibold w-40">
                    +27 68 392 8066
                  </div>
                </div>

                <div className="flex items-center mt-2  text-bgPrimary">
                  <MdOutlineEmail className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-tight font-semibold w-40">
                    contact@prashely.com
                  </div>
                </div>
                <div className="flex items-center mt-2  text-bgPrimary">
                  <FaClock className="w-6 h-6" />
                  <div className="ml-4 text-md  font-semibold w-full">
                    Mon - Fri:
                    <span className="tracking-tighter font-normal ml-1">
                      04:30 - 20:00PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="card bg-bgPrimary w-full max-w-sm shrink-0">
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
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="068 392 8066"
                      className="input input-bordered bg-white"
                      required
                    />
                  </div>
                  <div className="form-control mt-1">
                    <button className="btn bg-bgSecondary text-bgPrimary">
                      Call Me
                    </button>
                  </div>
                  <p className="font-light text-xs text-center text-white">
                    Don’t worry, we won’t show your contact details to anyone.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
