import React from 'react'
import WorkCard from './WorkCard.jsx'
import workContents from '../assets/workContents.js'


const Work = () => {
  return (
    <div>
        {
            workContents.map(project => < WorkCard project={project}/>)
        }
    </div>
  )
}

export default Work