import React from "react";
import Banner from "./Banner.jsx";

const About = ({ section }) => {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center mt-4  overflow-hidden">
      <Banner header={section.heading} />
      <div className="flex flex-col md:flex-row w-full overflow-hidden my-4 md:my-8">

        <img
          className={`saturate-150 border w-full sm:h-96 object-cover p-1  ${
            section.body && "md:w-2/5 lg:w-1/2 md:h-inherit"
          }`}
          src={section.img}
          alt=""
        />
   
        <div className="bg-neutral-50 px-4 py-6 md:py-2 md:ml-8 text-justify flex flex-col items-center justify-center">
          <div>{section.body}</div>
          <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-gray-500 rounded-sm  mt-8 md:mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
