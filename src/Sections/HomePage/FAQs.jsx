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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              sapiente quos quod labore vel inventore harum deleniti
              consequuntur nesciunt, rem sequi, rerum magnam, illum?
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-bgPrimary text-white mb-0.5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I join as a beginner?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id animi
              quam, officiis asperiores voluptatibus officia accusantium placeat
              facere. Sapiente, laboriosam commodi. Repellendus sunt nihil vitae
              sequi blanditiis! Ducimus, iusto culpa.
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              sequi facilis exercitationem animi excepturi odit, quaerat ipsam
              minima ipsa aut.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quae consectetur atque, quasi vitae consequatur labore excepturi,
              doloremque veniam dignissimos blanditiis eius ratione esse, at
              magnam voluptate sapiente praesentium magni!
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
