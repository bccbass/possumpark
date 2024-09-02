import React from "react";
import { useState, useRef, useEffect } from "react";

const VidPlayer = ({ project, isPlaying, setIsPlaying }) => {
  const [isLoading, setIsLoading] = useState(false)
  const vidRef = useRef(null);

  
  return (
    <div className="">
      {
        <div className="w-full h-1/2">
          {isPlaying == project.videoID ? (
            <React.Suspense fallback={<h1 className="h-24 w-full bg-red-300">loading...</h1>}>
              <video
                ref={vidRef}
                className="w-full"
                height={"100%"}
                width={"100%"}
                autoPlay
                controls
                poster={project.img}
                playsInline
                src={project.videoID}
                type="video/mp4"
              ></video>
            </React.Suspense>
          ) : (
            <React.Suspense fallback={<h1 className="h-24 w-full bg-red-300">loading...</h1>}>
            <img
              onClick={() => setIsPlaying(project.videoID)}
              src={project.img}
              alt={project.title}
            />
            </React.Suspense>
          )}
        </div>
      }
    </div>
  );
};

export default VidPlayer;
