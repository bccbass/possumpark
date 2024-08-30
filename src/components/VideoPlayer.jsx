import React from 'react'
import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import "cloudinary-video-player/cld-video-player.min.css";


const VideoPlayer = ({videoID}) => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if ( cloudinaryRef.current ) return;
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.videoPlayer( videoRef.current, {
            cloud_name: 'dyb9ascpy',
            secure: true,
            controls: true,
            f_auto: 'video',
            autoplay: true,
            // height: "300",
            width: "300"
            // transformation: {width: 'auto'}
        } );
    }, [])
  return (
    < video 
    // className="absolute object-cover w-100 h-full top-0 left-0"

        ref={ videoRef }
        data-cld-public-id={"possumpark/video/" + videoID}
        width={"auto"}
        height={"auto"}
        
    />
  )
}

export default VideoPlayer