import React from 'react'
import { useState, useRef } from 'react'
import WorkCard from './WorkCard.jsx'
import workContents from '../assets/workContents.js'


const Work = () => {
  const [isPlaying, setIsPlaying] = useState(null);

  return (
    <div className='flex flex-wrap justify-around'>
        {
            workContents.map(project => < WorkCard project={project} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>)
        }
    </div>
  )
}

export default Work