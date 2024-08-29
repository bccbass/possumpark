import React from "react";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import tagInfo from "../assets/tagInfo";

const WorkCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="m-5 border border-gray-200 flex flex-col items-center p-6 rounded-sm rounded-t-2xl shadow-lg bg-neutral-100">
      <div className="">
        {!isPlaying ? (
          <img
            onClick={() => setIsPlaying(true)}
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
        <div className="flex flex-wrap space-y-1 space-x-1">
          <h2 className="font-semibold">tags:</h2>
          {project.tags.map((tag) => (
            <span
              className={`rounded-sm font-normal px-1 py-0 uppercase text-sm text-white ${tagInfo[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
