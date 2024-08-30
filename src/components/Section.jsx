import React from "react";
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ opacity: 0 }}
      className="p-2 px-8 flex flex-col items-center w-screen"
    >
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className=" flex flex-col my-3 w-full ">
          <div className={section.img && "my-4"}>
            <h2 className="bg-red-400 text-neutral-200  px-3 py-3 text-2xl text-end rounded-tl-3xl border-b border-red-600">
              {section.heading}
            </h2>
            {section.img && (
              <img
                className="saturate-150 w-full rounded-br-3xl"
                src={section.img}
                alt=""
              />
            )}
          </div>
          {section.body && (
            <div className="p-2 bg-neutral-50 border">{section.body}</div>
          )}
        </div>
        {children}

      </div>
    </motion.div>
  );
};

export default Section;
