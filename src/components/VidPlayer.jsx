import React from 'react'
import { useState, useRef } from 'react'

const VidPlayer = ({project, activeProject}) => {
  const vidRef = useRef(null) 
  const [text, setText] = useState('play state')

    
    // const handlePlayVideo = (vid) => {
    //   // setIsPlaying(project.videoID)
    //   vidRef.current.play()
    //   setText('playing now')
    //   console.log('clicked')
    // }
    // const handlePauseVideo = (vid) => {
    //   // setIsPlaying(project.videoID)
      
    //   vidRef.current.pause()
    // }
  // const handleClick = () => setIsPlaying(project.videoID);

  return (
    <div className="">
        {
       (
          <div className="w-full">
                <video
                vidRef={vidRef}
                // onPlay={handleClick}
    className="w-full"
    height={"100%"}
    width={"100%"}
    // autoPlay={isPlaying}
        // controls
    // controls={isPlaying}
    poster={project.img}
    playsInline
    src={`https://res.cloudinary.com/dyb9ascpy/video/upload/v1724886027/possumpark/video/${project.videoID}.mov`}
    // src={`https://res.cloudinary.com/dyb9ascpy/video/upload/f_auto:video,q_auto/v1724886027/possumpark/video/${videoID}.mov`}
    // onLoadedData={handleVideoLoad}
></video>
        <div onClick={() => vidRef.current.play()} className='bg-green-800 z-50'>{vidRef.current}</div>
<div className='bg-red-800'>{text}</div>
          </div>
        )}

      </div>

  )
}

export default VidPlayer