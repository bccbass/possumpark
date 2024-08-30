import React from 'react'
import { useState, useRef } from 'react'

const VidPlayer = ({project, activeProject}) => {
  const vidRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handlePlayVideo = () => {
      setIsPlaying(project.videoID)
      vidRef.current.play()
    }
  const handleClick = () => setIsPlaying(project.videoID);

  return (
    <div className="">
        {
       (
          <div className="w-full">
                <video
                ref={vidRef}
                onClick={handleClick}
    className="w-full"
    height={"100%"}
    width={"100%"}
    // autoPlay={isPlaying}

    controls={isPlaying}
    poster={project.img}
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