import React from "react";
import { useState, useRef, useEffect } from "react";

const VidPlayer = ({ project, isPlaying, setIsPlaying }) => {

  return (
    <div className="">
      {
        <div className="w-full ">
          {isPlaying == project.videoID ? (
            <div>
              <video
                className="w-full relative top-0 left-0 z-20"
                // style={{transform: 'translate(0px, -1px)'}}
                height={"100%"}
                width={"100%"}
                autoPlay
                controls
                poster={project.img}
                playsInline
                src={project.videoID}
                type="video/mp4"
              ></video>
            </div>
          ) : (
            <div className="z-20">
            <img
              onClick={() => setIsPlaying(project.videoID)}
              src={project.img}
              alt={project.title}
            />
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default VidPlayer;
