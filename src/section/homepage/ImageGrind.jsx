import React from "react";
import One from "../../assets/images/HZ19.jpg";
import Two from "../../assets/images/HZ13.png";
import Three from "../../assets/images/HZ11.jpg";

const ImageGrid = () => {
  return (
    <section className="w-full py-2 bg-white lg:h-auto">
      <div className="container mx-auto px-4">
        {/* Flex container for two main grids */}
        <div className="flex justify-center gap-4 lg:h-[400px]">
          {/* First Grid: Single Image */}
          <div className="w-[40vw] lg:w-[25vw] min-w-0">
            <img
              src={Two}
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second Grid: Two Images Stacked */}
          <div className="flex flex-col lg:flex-row w-[50vw] gap-3">
            <img
              src={One}
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={Three}
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg shadow-lg lg:mb-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
