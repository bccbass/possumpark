import React from "react";
import { useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "@uidotdev/usehooks";

const VidPlayer = ({ project, isPlaying, setIsPlaying }) => {
  const vidRef = useRef(null);
  const smallScreen = useMediaQuery("only screen and (max-width : 768px)");

  // Logic to allow user to click away from the video player and hide playing status/hide info card. MediaQuery and device detection set up to disable at smaller sizes and for phones/tablets.
  useEffect(() => {
    const screenSize = window.matchMedia("(max-width: 600px)");
    const handleEvent = (e) => {
      const targetVid = vidRef.current;
      if (
        !smallScreen &&
        !isMobile &&
        targetVid &&
        !targetVid.contains(e.target)
      ) {
        setIsPlaying(null);
      }
    };

    document.addEventListener("pointerdown", handleEvent);

    return () => document.removeEventListener("pointerdown", handleEvent);
  }, [isPlaying, smallScreen]);

  return (
    <div className="">
      {
        <div className="w-full ">
          {isPlaying == project.videoID ? (
            <div>
              <video
                ref={vidRef}
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
