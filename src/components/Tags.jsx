import React from 'react'
import tagInfo from '../assets/tagInfo.js'

const Tags = ({tags}) => {
  return (
    <div className="flex flex-wrap">
    {tags.map((tag) => (
      <span
        className={`rounded-sm font-normal px-1 py-0  my-0.5 mx-1 uppercase text-xs text-white  ${tagInfo[tag]}`}
      >
        {tag}
      </span>
    ))}
  </div>
  )
}

export default Tags