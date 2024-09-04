import React from 'react'
import possum from '../assets/madpossumv2.png'

const Badge = () => {
  return (
    <div className='size-24  mx-3 flex flex-col rounded-full items-center translate-y-2'>
        <span className='text-xs translate-y-3'>coded by</span>
        <img className='size-12 opacity-80 grayscale' src={possum} alt="" />
        <span className='text-xs -translate-y-3'>possum park</span>

    </div>
  )
}

export default Badge