import React, { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1m");

  const pricingData = {
    scholars: {
      label: "Scholars (<19)",
      prices: {
        "1m": "R300",
        "3m": "R250",
        "6m": "R200",
        "1yr": "R166",
        "2yr": "---",
      },
    },
    students: {
      label: "Students(<23)",
      prices: {
        "1m": "R500",
        "3m": "R400",
        "6m": "R300",
        "1yr": "R241",
        "2yr": "---",
      },
    },
    Pensioners: {
      label: "Pensioners(>65)",
      prices: {
        "1m": "R500",
        "3m": "R400",
        "6m": "R300",
        "1yr": "R241",
        "2yr": "---",
      },
    },
    adults: {
      label: "Adults",
      prices: {
        "1m": "R700",
        "3m": "R500",
        "6m": "R400",
        "1yr": "R325",
        "2yr": "R245",
      },
    },
    couple: {
      label: "Couple",
      prices: {
        "1m": "R1000",
        "3m": "R800",
        "6m": "R650",
        "1yr": "R575",
        "2yr": "R206",
      },
    },
  };

  // Tab labels
  const tabs = [
    { id: "1m", label: "1m" },
    { id: "3m", label: "3m" },
    { id: "6m", label: "6m" },
    { id: "1yr", label: "1yr" },
    { id: "2yr", label: "2yr" },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center bg-white my-8">
      <div className="my-1 tracking-tighter text-center px-6">
        <h2 className="font-bold text-4xl text-bgPrimary text-center">
          PRICING
        </h2>
        <span className=" text-bgPrimary">
          <span className="text-bgSecondary">*</span>the longer your contract
          the less you <span className="text-bgSecondary">PAY</span>, We value
          commitment and loyalty.
        </span>
      </div>
      <div className="container w-[90vw] p-4 border-2 bg-bgPrimary rounded-2xl lg:shadow-none shadow-lg lg:relative relative lg:top-0 top-8 mb-8">
        {/* Tabs for Months */}
        <div className="tabs tabs-boxed flex justify-center mb-3 bg-bgPrimary lg:hidden ">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              className={`tab ${
                activeTab === tab.id ? "tab-active custom-tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </a>
          ))}
        </div>

        {/* Responsive grid for small screens */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
          <div className="flex flex-col  text-center text-white font-light space-y-10 my-4">
            {Object.values(pricingData).map((category, index) => (
              <div key={index} className="text-xl">
                {category.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-10 my-4">
            {Object.values(pricingData).map((category, index) => (
              <div
                key={index}
                className="text-bgSecondary font-black text-lg text-center"
              >
                {category.prices[activeTab]}
                <span className="text-xs text-white font-light ml-0.5">
                  p/m
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive table for larger screens */}
        <div className="hidden lg:block overflow-x-auto border border-gray-300">
          <table className="table-auto w-full text-center border-collapse border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-bgPrimary text-white">
                <th className="border  border-gray-300 p-8">Category</th>
                {tabs.map((tab) => (
                  <th key={tab.id} className="border  border-gray-300 p-4">
                    {tab.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(pricingData).map((category, index) => (
                <tr key={index} className="bg-bgPrimary">
                  <td className="border-r  border-gray-300 font-semibold p-4">
                    {category.label}
                  </td>
                  {tabs.map((tab) => (
                    <td key={tab.id} className="border-r border-gray-300 p-4">
                      {category.prices[tab.id]}
                      <span className="text-xs text-white font-light">p/m</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button className="btn w-[250px] mt-4 bg-bgSecondary text-bgPrimary">
          Share Prices
        </button>
      </div>
    </section>
  );
};

export default Pricing;
