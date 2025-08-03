import React from "react";
import One from "../../assets/images/6.jpg";
import Two from "../../assets/images/12.jpg";
import Three from "../../assets/images/13.jpg";
import Four from "../../assets/images/15.jpg";
import Five from "../../assets/images/1.jpg";
import Six from "../../assets/images/8.jpg";
const ImageGrid = () => {
  return (
    // <section className="w-full py-2 bg-bgPrimary lg:h-auto">
    //   <div className="container mx-auto px-4">
    //     {/* Flex container for two main grids */}
    //     <div className="flex justify-center gap-4 lg:h-[400px]">
    //       {/* First Grid: Single Image */}
    //       <div className="w-[40vw] lg:w-[25vw] min-w-0">
    //         <img
    //           src={Two}
    //           alt="Image 1"
    //           className="w-full h-full object-cover rounded-lg shadow-lg"
    //         />
    //       </div>

    //       {/* Second Grid: Two Images Stacked */}
    //       <div className="flex flex-col lg:flex-row w-[50vw] gap-3">
    //         <img
    //           src={One}
    //           alt="Image 1"
    //           className="w-full h-full object-cover rounded-lg shadow-lg"
    //         />
    //         <img
    //           src={Three}
    //           alt="Image 3"
    //           className="w-full h-full object-cover rounded-lg shadow-lg lg:mb-100"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container mx-auto px-4 my-8">
    //     {/* Flex container for two main grids */}
    //     <div className="flex justify-center gap-4 lg:h-[400px]">
    //       {/* First Grid: Single Image */}
    //       <div className="w-[40vw] lg:w-[25vw] min-w-0">
    //         <img
    //           src={Five}
    //           alt="Image 1"
    //           className="w-full h-full object-cover rounded-lg shadow-lg"
    //         />
    //       </div>

    //       {/* Second Grid: Two Images Stacked */}
    //       <div className="flex flex-col lg:flex-row w-[50vw] gap-3">
    //         <img
    //           src={Four}
    //           alt="Image 1"
    //           className="w-full h-full object-cover rounded-lg shadow-lg"
    //         />
    //         <img
    //           src={Six}
    //           alt="Image 3"
    //           className="w-full h-full object-cover rounded-lg shadow-lg lg:mb-100"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full py-12 bg-bgPrimary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          School Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[One, Two, Three, Four, Five, Six].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Highlight ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              {/* Optional caption/overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                {
                  [
                    "Selected For Nationals 2025",
                    "Electrical Class | Projects",
                    "Electrical Class | Projects",
                    "Dennis Matlhaba II",
                    "Soccer Team",
                    "Coaches",
                  ][index]
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
