import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import VidPlayer from "./VidPlayer";
import WorkCardInfo from "./WorkCardInfo";

const WorkCard = ({ project, isPlaying, setIsPlaying }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 px-2"
    >
      <div className=" flex flex-col shadow-md mb-4 bg-white w-full">
        <div className="z-20">
          <VidPlayer
            project={project}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
        <AnimatePresence>
          {project.videoID === isPlaying && (
            <motion.div
              className="z-0 flex self-start ml-2 items-center"
              initial={{ height: "0px", opacity: "1" }}
              animate={{ height: "auto", opacity: "1" }}
              exit={{ height: "0px", opacity: "0" }}
            >
              <WorkCardInfo isPlaying={isPlaying} project={project} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WorkCard;
