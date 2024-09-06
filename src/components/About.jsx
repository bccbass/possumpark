import React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionContents } from "../assets/sectionContents.js";
import synths from '../assets/synths.webp'

const About = () => {
    const section = sectionContents[1]

  return (
    <motion.div
    className=""
  >
    {/* <div className="w-full  h-16 bg-red-400"></div> */}
    <div className="mt-16 translate-y-8 bg-red-500 w-full h-16 self-end opacity-95"><div className="bg-neutral-50 h-full w-fit ml-96 -skew-x-12 flex  items-center"><h2 className="julius-sans-one-regular px-4 text-red-700 text-4xl skew-x-12">who we are</h2></div></div>
    <div className="" style={{display: 'flow-root'}}>
      <img src={synths} className="saturate-150 w-1/2" alt="" style={{shapeMargin: '.5rem', shapeOutside: 'polygon(0% 0%, 74.19% 2.09%, 80.16% 19.14%, 58.97% 46.59%, 100% 61.71%, 99.73% 71.86%, 87.76% 100.08%, 0% 100%)', float: "left"}}/>
      {/* <img src={synths} className="w-1/2" alt="" style={{shapeMargin: '.5rem', shapeOutside: 'url(../assets/synths.webp', float: "left"}}/> */}
      <article className="mt-16 text-justify ">{section.body}</article>
    </div>
    <div className="mt-16 mb-8 bg-red-500 w-full h-16 self-end opacity-95"><div className="bg-neutral-50 h-full w-fit ml-16 -skew-x-12 flex  items-center"><h2 className="julius-sans-one-regular px-4 text-red-700 text-4xl skew-x-12">what we do</h2></div></div>
    
  </motion.div>
  )
}

export default About