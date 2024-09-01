import React from "react";
import { useState, useRef } from "react";

const VidPlayer = ({ project, isPlaying, setIsPlaying }) => {
  return (
    <div className="">
      {
        <div className="w-full h-1/2">
          {isPlaying == project.videoID ? (
            <video
              className="w-full"
              height={"100%"}
              width={"100%"}
              autoPlay
              controls
              // poster={project.img}
              playsInline
              src={`https://res.cloudinary.com/dyb9ascpy/video/upload/v1724886027/possumpark/video/${project.videoID}.mov`}
            ></video>
          ) : (
            <img
              onClick={() => setIsPlaying(project.videoID)}
              src={project.img}
              alt=""
            />
          )}
        </div>
      }
    </div>
  );
};

export default VidPlayer;
