import React from "react";
import { useState } from "react";

const WorkCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="m-5 border border-gray-300 flex flex-col items-center p-6 rounded-sm rounded-t-2xl shadow-lg bg-gray-200">
      {/* <span>{"https://www.youtube.com/" + project.URL}</span> */}
      <div className="full rounded-xl">
        {!isPlaying ? (
          <img
            onClick={() => setIsPlaying(true)}
            className="py-2 bg-black rounded-t-xl"
            src={project.img}
            alt=""
          />
        ) : (
          <iframe
          className=" rounded-t-xl"

            width="100%"
            height=""
            src={`https://www.youtube.com/embed/${project.URL}?si=fLLR64n5W_OiUv5y`}
            title="YouTube video player"
            frameborder="0"
            autoPlay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div className="w-full">
      <h2 className="font-light"><span className="font-semibold"> project: </span>{project.title}</h2>
      <h2 className="font-light"> <span className="font-semibold"> role: </span>{project.role}</h2>
      </div>
    </div>
  );
};

export default WorkCard;
