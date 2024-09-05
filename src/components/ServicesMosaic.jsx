import React from "react";

const ServicesMosaic = () => {
  const services = [
    "backing tracks",
    "podcasts",
    "audiobooks",
    "arrangements for musical theatre",
    "access to session musicians",
    "mixing",
    "commercial music",
    "film and television scoring",
    "sound design",
  ];
  return (
    <figure className="flex flex-wrap w-3/5 ">
      {services.map((service, i) => (
        <div className="flex bg-inherit h-20  w-1/3">
        <div className={`text-center  bg-red-${i}00  w-full h-full my-4 julius-sans-one-regular`}>
            <h2>{service}</h2>
        </div>
        </div>
      ))}
    </figure>
  );
};

export default ServicesMosaic;
