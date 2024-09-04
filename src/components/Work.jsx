import React from "react";
import { useState, useRef } from "react";
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
            <h2 className="julius-sans-one-regular text-2xl text-gray-800 p-2">{genre}</h2>
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
