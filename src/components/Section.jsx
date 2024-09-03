import React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  const sectionRef = useRef(null);
  useEffect(()=>{
    sectionRef.current.scrollIntoView()
  }, [])

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      exit={{ opacity: 0 }}
      className={`p-2 px-8 drop-shadow-lg flex flex-col items-center w-screen rounded-sm self-center md:mt-16 ${section.menuTitle == 'contact' ? 'max-w-xl' : 'max-w-4xl'}`}
    >
      <div className="w-full max-w-3xl flex flex-col items-center mt-4  overflow-hidden">
        <div className=" flex flex-col w-full border rounded-tl-3xl overflow-hidden mb-7">
          <div className={""}>
            <h2 className="julius-sans-one-regular text-neutral-100 bg-red-400  py-1 pl-4  text-2xl text-start ">
              {section.heading}
            </h2>
            {section.img && (
              <img
                className="saturate-150 w-full sm:h-96 object-cover"
                src={section.img}
                alt=""
              />
            )}
          </div>
          {section.body && <div className="bg-white p-3">{section.body}</div>}
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
