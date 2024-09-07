import React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";

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
      className={`px-4 sm:px-8  flex flex-col items-center w-screen self-center md:mt-16 md:px-20 lg:px-0 ${
        section.menuTitle == "contact" ? "max-w-xl" : "max-w-4xl"
      }`}
    >
      <div className="w-full max-w-3xl sm:border flex flex-col items-center mt-4  overflow-hidden sm:bg-neutral-50 p-4 sm:p-8">
        <Banner header={section.heading} />
        <div className="flex flex-col md:flex-row w-full overflow-hidden my-4 md:my-6">
          {section.img && (
            <img
              className={`saturate-150 border w-full sm:h-96 object-cover sm:p-1  ${
                section.body && "md:w-2/5 lg:w-1/2 md:h-inherit"
              }`}
              src={section.img}
              alt=""
            />
          )}
          {section.body && (
            <div className="sm:bg-neutral-50 px-4 py-6 md:py-2 md:ml-8 text-justify flex flex-col items-center justify-center">
              <div>{section.body}</div>
              <div className=" w-1/2 sm:w-3/5  h-1 border-b-2 border-gray-500 rounded-sm  mt-8 md:mt-4"></div>
            </div>
          )}
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
