import React from "react";
import { motion } from "framer-motion";
import { sectionContents } from "../assets/sectionContents";

const Menu = ({ setOpen, setActiveID, activeID }) => {
  const handleSetActiveID = (id) => {
    setActiveID(id);
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{}}
      className="z-10 bg-red-400  fixed h-screen flex flex-col items-center w-full"
    >
      <div className="flex flex-col items-center justify-between h-1/2 my-20 text-3xl text-slate-100 font-light cursor-default">
        {sectionContents.map((section) => (
          <span
            className={activeID == section.ID && "underline underline-offset-8"}
            onClick={() => handleSetActiveID(section.ID)}
          >
            {section.menuTitle}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
