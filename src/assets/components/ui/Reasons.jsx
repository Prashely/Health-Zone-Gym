import React from "react";

const Reasons = ({ imageSrc, title, description, icon }) => {
  console.log("Reasons component rendered"); // For checking unnecessary renders

  return (
    <div className="relative w-[95vw] lg:w-[300px] h-[450px] overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 w-full h-[200px] bg-bgPrimary bg-opacity-90 p-4 flex flex-col items-center justify-center text-center text-white">
        <p className="text-4xl mb-2">{icon}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

// Memoize the component to prevent re-renders unless props change
export default React.memo(Reasons);
