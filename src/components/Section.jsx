import React from "react";
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ opacity: 0 }}
      className="p-2 px-8 drop-shadow-sm flex flex-col items-center w-screen rounded-sm "
    >
      <div className="w-full max-w-3xl flex flex-col items-center mt-4  overflow-hidden">
        <div className=" flex flex-col w-full border rounded-tl-3xl overflow-hidden mb-7">
          <div className={''}>
            <h2 className="julius-sans-one-regular text-neutral-100 bg-red-400  py-1 pl-4  text-2xl text-start ">
              {section.heading}
            </h2>
            {/* <h2 className="bg-red-400 text-neutral-200  px-3 py-3 text-2xl text-end rounded-tl-3xl ">
              {section.heading}
            </h2> */}
            {section.img && (
              <img
                className="saturate-150 w-full rounded-sm"
                src={section.img}
                alt=""
              />
            )}
          </div>
          {section.body && (
            <div className="bg-white p-2">{section.body}</div>
          )}
        </div>
        {children}

      </div>
    </motion.div>
  );
};

export default Section;
