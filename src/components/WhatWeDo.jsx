import React from "react";
import Banner from "./Banner";

const WhatWeDo = () => {
  return (
    <div className="w-full max-w-xl flex flex-col items-center mb-4  overflow-hidden">
      {/* <Banner header={"what we do"} /> */}
      <div className="flex flex-col md:flex-row w-full overflow-hidden my-4 md:my-8">
        {/* <img
          className={`saturate-150  w-full sm:h-96 object-cover p-1 "md:w-2/5 lg:w-1/2 md:h-inherit"`}
          src={null}
          alt=""
        /> */}

        <div className="julius-sans-one-regular bg-red-500 p-2 flex flex-col items-center justify-center">
          <div className="julius-sans-one-regular bg-red-500 text-neutral-100 w-full p-6 border-2 border-neutral-100 text-justify flex flex-col items-center justify-center">
            <div className="text-center text-2xl">What We Do</div>
            <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-neutral-100 rounded-sm  my-6 "></div>

            <ul className="text-center text-xl sm:text-2xl flex flex-col space-y-8 sm:space-y-10">
              <li>Mixing</li>
              <li>Lessons in production & working in daws</li>
              <li>World class session musicians</li>
              <li>Backing tracks for artists & bands</li>
              <li>Backing tracks for musical theatre</li>

              <li>Music for Film & Television</li>
              <li>Music for Commercials</li>
              <li>Podcasts & Audiobooks</li>
              <li>Post production & Sound Design</li>
            </ul>
            <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-neutral-100 rounded-sm  my-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
