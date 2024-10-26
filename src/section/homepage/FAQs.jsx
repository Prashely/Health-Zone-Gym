import React from "react";

const FAQs = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-bgSecondary  mt-6 m">
      <h2 className="font-bold text-4xl text-bgPrimary my-6 tracking-tighter ">
        FAQs
      </h2>
      <div className="w-[95vw] md:w-[750px]">
        <div className="collapse collapse-arrow bg-bgPrimary text-white mb-0.5 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Do I need to be Fit to join the gym?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely not, whether you are beginning you fitness journey or
              already on your fitness journey, Health Zone offers expert
              coaching and personal training to help you reach your fitness
              goals regardless of your experience. Let's find a plan that suits
              you{" "}
              <a href="#contact" className="text-bgSecondary underline">
                click here
              </a>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-bgPrimary text-white mb-0.5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are packages for couples?
          </div>
          <div className="collapse-content">
            <p>
              Yes, at Health Zone we offer a variety of packages. If you get a
              membership with your partner there are special discounts, and the
              longer the contract the less you will be paying, for more details{" "}
              <a href="#contact" className="text-bgSecondary underline">
                click here
              </a>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-bgPrimary text-white mb-0.5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I cancel my subscription anytime?
          </div>
          <div className="collapse-content">
            <p>
              No contracts can not be cancelled unless is due to unavoidable
              causes, Before choosing a contract plan consider your finances.
              Let us help you pick a plan that suits you
              <a href="#contact" className="text-bgSecondary underline ml-1">
                click here
              </a>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-bgPrimary text-white mb-0.5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What are the gym's operating hours?
          </div>
          <div className="collapse-content">
            <p>
              During the week the gym is open from 4am to 8pm everyday including
              holidays. Saturday the gym is open from 7am to 12pm. And Sundays
              is from 9am to 12pm.
            </p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-xl text-bgPrimary font-black">
          HEALTHY BODY, HEALTHY MIND
        </p>
      </div>
    </section>
  );
};

export default FAQs;
