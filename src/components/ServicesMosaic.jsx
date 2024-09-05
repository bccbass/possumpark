import React from "react";
import "../servicesmosaic.css";
const ServicesMosaic = () => {
  const services = [
    "backing tracks",
    "podcasts",
    "audiobooks",
    "arrangements for musical theatre",
    "world class session musicians",
    "mixing",
    "music for commercials",
    "scoring for film and television",
    "sound design",
    "education and production lessons",
    "sound-alikes",
    "bands",
  ];
  return (
    <figure className="flex flex-wrap w-full my-4">
      {/* {services.map((service, i) => (
        <div className="flex bg-inherit h-24 w-1/3">
          <div
            className={`text-center  bg-teal-800 rounded-lg  w-full  m-0.5 julius-sans-one-regular flex flex-col items-center justify-center`}
          >
            <h2 className="break-words text-neutral-100 text-sm w-24">
              {service}
            </h2>
          </div>
        </div>
      ))} */}
      <div class="container text-neutral-100 text-pretty text-center julius-sans-one-regular text-2xl">

        <div className="bg-red-500 one flex flex-col justify-center"><h2>What we do</h2></div>
        <div className="bg-red-400 two overflow-hidden">
          
        </div>
        <div className="bg-red-700 three overflow-clip">
          <img
            className="grayscale hover:grayscale-0 transition-all saturate-150 scale-150"
            src="https://res.cloudinary.com/dyb9ascpy/image/upload/v1724818853/possumpark/mustang"
            alt=""
          />
        </div>
        <div className="bg-sky-900 four"><img
            className="grayscale hover:grayscale-0 transition-all saturate-150"
            src="https://res.cloudinary.com/dyb9ascpy/image/upload/v1724818853/possumpark/pedal"
            alt=""
          /></div>
        <div className="bg-orange-500 five place-self-center p-4">
          sound design
        </div>
        <div className="bg-violet-800 six">podcasts</div>
        <div className="bg-yellow-500 seven ">
          <span className=" block rotate-90 translate-y-20"> audiobooks</span>
        </div>
        <div className="bg-blue-500 eight">
          education and production lessons
        </div>
        <div className="bg-gray-800 nine">arrangements for musical theatre</div>
        <div className="bg-emerald-500 ten overflow-hidden">
          <img
            className="grayscale hover:grayscale-0 transition-all saturate-150 object-cover"
            src="https://res.cloudinary.com/dyb9ascpy/image/upload/v1724818853/possumpark/upright"
            alt=""
          />
        </div>
        <div className="bg-red-500 eleven">bands</div>
      </div>
    </figure>
  );
};

export default ServicesMosaic;
