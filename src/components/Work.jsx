import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard.jsx";
import Banner from "./Banner.jsx";
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
    <>
      {/* <Banner  header={'work'}/> */}

      <div className="flex flex-wrap justify-around">
        {
          genres.map((genre) => (
            <section className="w-full">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 1 }}
                viewport={{ once: true }}
                className="julius-sans-one-regular text-2xl lg:text-3xl text-gray-700 p-2 "
              >
                {genre}
              </motion.h2>
              <div className="flex flex-wrap w-full mb-4">
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
    </>
  );
};

export default Work;
