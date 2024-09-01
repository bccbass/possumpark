import React from "react";
import { useState, useRef } from "react";

const VidPlayer = ({ project, isPlaying, setIsPlaying }) => {
  const vidRef = useRef(null)
  return (
    <div className="">
      {
        <div className="w-full h-1/2">
          {isPlaying == project.videoID ? (
            <div className="">
            <video
            ref={vidRef}
              className="w-full"
              // height={"100%"}
              width={"100%"}
              autoPlay
              controls
              poster={project.img}
              playsInline
              src={`https://res.cloudinary.com/dyb9ascpy/video/upload/v1724886027/possumpark/video/${project.videoID}.mov`}
              type="video/mp4"
            ></video>
            <div onClick={() => vidRef.current.play()}>play</div>
            <div onClick={() => vidRef.current.pause()}>pause</div>
            </ div>
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
