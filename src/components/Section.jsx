import React from 'react'
import { motion } from "framer-motion";

const Section = ({ section, children }) => {
  return (
       <motion.div 
    initial={{  opacity: 0}}
    animate={{ x: 0, opacity: 100 }}
    exit={{opacity: 0}}
    className='p-2 px-8 flex flex-col items-center w-screen mt-8'
    >
      <div className='w-full max-w-3xl flex flex-col items-center '>
      <img className='rounded-md saturate-150' src={section.img} alt="" />
      <div className='flex flex-col my-3 w-full'>
        <h2 className='text-red-500 text-2xl'>{section.heading}</h2>
        <div>{section.body}</div>
        {children}
    </div>
    </div>
    </motion.div> 
  )
}

export default Section