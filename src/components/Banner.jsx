import React from "react";

const Banner = ({ header, end = false }) => {
  return (
    <>
      <div className="w-full bg-red-500 h-1"></div>
      <div
        className={`bg-red-500 w-full h-8 sm:h-10 self-end opacity-95 flex my-0.5 justify-center ${
          end ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        <div
          className={`bg-red-500 h-full w-fit  flex  items-center border-l-2 border-r-2 ${
            end ? "sm:mr-16" : "sm:ml-16"
          }`}
        >
          <h2 className=" text-neutral-50 julius-sans-one-regular px-4  text-2xl sm:text-3xl md:text-4xl ">
            {header}
          </h2>
        </div>
      </div>
      <div className="w-full bg-red-500 h-1"></div>
    </>
  );
};

export default Banner;
