import React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    sectionRef.current.scrollIntoView();
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ opacity: 0 }}
      className={` px-8 drop-shadow-md flex flex-col items-center w-screen self-center md:mt-16 md:px-20 lg:px-0 ${
        section.menuTitle == "contact" ? "max-w-xl" : "max-w-4xl"
      }`}
    >
      <div className="w-full max-w-3xl flex flex-col items-center mt-4  overflow-hidden">
        {/* <h2 className="julius-sans-one-regular text-neutral-100 bg-red-400 w-full py-1 pl-4  text-2xl text-start ">
          {section.heading}
        </h2> */}
        <div className="w-full">
          <div className="w-full bg-red-500 h-1"></div>
    <div className=" bg-red-400 w-full h-12 self-end opacity-95 flex justify-end my-0.5"><div className=" text-neutral-50 bg-red-500 h-full w-fit mx-24  right-0  flex  items-center border-l-2 border-r-2"><h2 className="julius-sans-one-regular px-4  text-4xl uppercase">{section.heading}</h2></div></div>
          <div className="w-full bg-red-500 h-1"></div>
         </div>
        {/* <div className="w-full my-12">
          <div className="w-full bg-red-300 h-6"></div>
    <div className=" bg-red-400 w-full h-16 self-end opacity-95 flex justify-end"><div className="text-neutral-50 bg-red-500 rounded-full h-full w-fit mx-24  right-0  flex  items-center"><h2 className="julius-sans-one-regular px-4  text-4xl">{section.heading}</h2></div></div>
          <div className="w-full bg-red-500 h-5"></div>
         </div> */}
        <div className=" flex flex-col md:flex-row w-full overflow-hidden">
          {section.img && (
            <img
              className={`saturate-150 w-full sm:h-96 object-cover rounded-b ${
                section.body && "md:w-2/5 lg:w-1/2 md:h-inherit"
              }`}
              src={section.img}
              alt=""
            />
          )}
          {section.body && (
            <div className="bg-neutral-50 p-3 text-justify md:py-4 ">
              {section.body}
            </div>
          )}
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
