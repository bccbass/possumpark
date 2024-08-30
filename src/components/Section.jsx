import React from "react";
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ opacity: 0 }}
      className="p-2 px-8 flex flex-col items-center w-screen mt-8"
    >
      <div className="w-full max-w-3xl flex flex-col items-center ">
  
        <div className=" flex flex-col my-3 w-full">
          <h2 className="bg-red-500 text-neutral-200  px-3 py-3 text-2xl text-end">
            {section.heading}
          </h2>
          <img
          className="saturate-150 w-full my-2"
          src={section.img}
          alt=""
        />
          <div className="p-2 bg-neutral-50 border">{section.body}</div>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
