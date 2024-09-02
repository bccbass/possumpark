import React from "react";
import { useState } from "react";
import VidPlayer from "./VidPlayer";
import Tags from "./Tags";

const WorkCard = ({ project, isPlaying, setIsPlaying }) => {
  return (
    <div className=" flex flex-col items-center shadow-xl mb-4 bg-white w-full max-w-lg">
      <h2 className="julius-sans-one-regular bg-cyan-900 w-full text-neutral-50 rounded-t-sm p-1.5">
        project: {project.title}
      </h2>
      <div className="">
        <VidPlayer
          project={project}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>

      <div className="w-full flex flex-col space-y-2 py-2 px-1.5">
        <article className="font-light">
          <span className="font-semibold"> Description: </span>
          {project.description}
        </article>
        <h2 className="font-light">
          <span className="font-semibold"> Role: </span>
          {project.role}
        </h2>
        {/* <Tags tags={project.tags} /> */}
      </div>
    </div>
  );
};

export default WorkCard;
