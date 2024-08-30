import React from "react";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Tags from "./Tags";

const WorkCard = ({ project, isPlaying, setIsPlaying }) => {
  return (
    <div className="border border-gray-200 flex flex-col items-center p-6 rounded-lg shadow-lg bg-neutral-100 w-full">
      <div className="">
        {isPlaying != project.videoID? (
          <img
            onClick={() => setIsPlaying(project.videoID)}
            className="rounded"
            src={project.img}
            alt=""
          />
        ) : (
          <div className="rounded-lg overflow-hidden">
            <VideoPlayer videoID={project.videoID} />
          </div>
        )}
      </div>
      <div className="w-full flex flex-col space-y-2 my-2">
        <h2 className="font-light">
          <span className="font-semibold"> project: </span>
          {project.title}
        </h2>
        <h2 className="font-light">
          <span className="font-semibold"> role: </span>
          {project.role}
        </h2>
        < Tags tags={project.tags} />
      </div>
    </div>
  );
};

export default WorkCard;
