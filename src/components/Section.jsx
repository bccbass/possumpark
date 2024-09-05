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
      className={`p-2 px-8 drop-shadow-md flex flex-col items-center w-screen self-center md:mt-16 md:px-20 lg:px-0 ${
        section.menuTitle == "contact" ? "max-w-xl" : "max-w-4xl"
      }`}
    >
      <div className="w-full max-w-3xl flex flex-col items-center mt-4 rounded-t overflow-hidden">
        <h2 className="julius-sans-one-regular text-neutral-100 bg-red-400 w-full py-1 pl-4  text-2xl text-start ">
          {section.heading}
        </h2>
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
