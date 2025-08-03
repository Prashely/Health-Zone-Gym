import React from "react";

const Reasons = ({ imageSrc, title, description, icon }) => {
  console.log("Reasons component rendered"); // For checking unnecessary renders

  return (
    <div className="relative w-[95vw] lg:w-[380px] 2xl:w-[600px]  lg:h-[500px] 2xl:h-[750px] overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 w-full h-[200px] bg-bgSecondary bg-opacity-90 p-6 flex flex-col items-center justify-center text-center text-white">
        <p className="text-4xl 2xl:text-7xl mb-2 text-white">{icon}</p>
        <h3 className="text-2xl  2xl:text-3xl font-bold text-white">{title}</h3>
        <p className="text-sm 2xl:text-lg pb-2">{description}</p>
      </div>
    </div>
  );
};

// Memoize the component to prevent re-renders unless props change
export default React.memo(Reasons);
