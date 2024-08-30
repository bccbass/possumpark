import React from 'react'
import { useState } from 'react'

const VidPlayer = ({project, activeProject}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setIsPlaying(project.videoID);

  return (
    <div className="">
        {activeProject != project.videoID ? (
            < div >
            {isLoading && <h1>LOADING</h1>}
          <img
            onClick={handleClick}
            className="rounded"
            src={project.img}
            alt=""
          />
          </div>
        ) : (
          <div className="w-full">
                <video
    className="w-full"
    height={"100%"}
    width={"100%"}
    controls
    autoPlay
    poster={project.IMG}
    playsInline
    src={`https://res.cloudinary.com/dyb9ascpy/video/upload/v1724886027/possumpark/video/${project.videoID}.mov`}
    // src={`https://res.cloudinary.com/dyb9ascpy/video/upload/f_auto:video,q_auto/v1724886027/possumpark/video/${videoID}.mov`}
    // onLoadedData={handleVideoLoad}
></video>
          </div>
        )}
      </div>

  )
}

export default VidPlayer