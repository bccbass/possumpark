import React from "react";
import { motion } from "framer-motion";
import { sectionContents } from "../assets/sectionContents";

const Menu = ({ setOpen, setActiveID }) => {
  const handleSetActiveID = (id) => {
    setActiveID(id);
    setOpen(false);
  };

  return (
    <motion.div 
    initial={{ x: 100 }}
    animate={{ x: 0 }}
    
  transition={{  }}

    className="z-10 bg-red-400  fixed h-screen flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-between h-1/2 my-20 text-3xl text-slate-100">
        {sectionContents.map((section) => (
          <span onClick={() => handleSetActiveID(section.ID)}>
            {section.menuTitle}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
