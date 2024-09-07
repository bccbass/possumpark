import React from "react";

const WhatWeDo = () => {
  return (
        <div className="w-full julius-sans-one-regular mb-4 md:mb-8 bg-red-500 p-2 flex flex-col items-center justify-center">
          <div className="w-full text-neutral-100 p-6 border-2 border-neutral-100 text-justify flex flex-col items-center justify-center">
            <div className="text-2xl">What We Do</div>
            <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-neutral-100 rounded-sm  my-6 "></div>
            <ul className="text-center text-xl sm:text-2xl flex flex-col space-y-8 sm:space-y-10">
              <li>Mixing</li>
              {/* <li>Lessons in production & working in daws</li> */}
              {/* <li>World class session musicians</li> */}
              {/* <li>Backing tracks for musical theatre</li> */}
              <li>Music for Film & Television</li>
              <li>Music for Commercials</li>
              <li>Backing tracks for artists & bands</li>
              <li>Podcasts & Audiobooks</li>
              <li>Post production & Sound Design</li>
            </ul>
            <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-neutral-100 rounded-sm  my-6"></div>
          </div>
        </div>
  );
};

export default WhatWeDo;
