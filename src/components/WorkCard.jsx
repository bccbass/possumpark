import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import VidPlayer from "./VidPlayer";
import WorkCardInfo from "./WorkCardInfo";

const WorkCard = ({ project, isPlaying, setIsPlaying }) => {
  return (
    <div className=" flex flex-col items-center shadow-xl mb-4 bg-white w-full max-w-lg">
      <h2 className="julius-sans-one-regular bg-cyan-900 w-full text-neutral-50 rounded-t-sm p-1.5">
        project: {project.title}
      </h2>
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
          className="z-0 flex justify-center items-center"
          initial={{height: '0px'}}
          animate={{ height: '115px' }}
          exit={{ height: '0px' }}>
          <WorkCardInfo isPlaying={isPlaying} project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkCard;
