import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard.jsx";
import workContents from "../assets/workContents.js";

const Work = () => {
  const [isPlaying, setIsPlaying] = useState(null);
  const genres = [
    "jazz || experimental",
    "television",
    "ambient || sound design",
    "commercial",
    "indie",
  ];

  return (
    <div className="flex flex-wrap justify-around">
      {
        genres.map((genre) => (
          <section className="w-full">
            <motion.h2 
             initial={{ opacity: 0}}
             whileInView={{ opacity: 1}}
             transition={{ delay: .1, duration:1}}
             viewport={{ once: true }}
            className="julius-sans-one-regular text-xl md:text-2xl text-neutral-100 p-2 my-2">
              {genre}
            </motion.h2>
            <div className="flex flex-wrap w-full">
              {workContents.map((project) =>
                project.genres.includes(genre) ? (
                  <WorkCard
                    project={project}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                ) : null
              )}
            </div>
          </section>
        ))
        //  workContents.map(project => < WorkCard project={project} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>)
      }
    </div>
  );
};

export default Work;
