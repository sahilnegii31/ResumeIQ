import React from 'react'

const Filetrack = ({file}) => {
  return (
    <div className = {` border-2 border-[#555] w-fit max-w-[14rem] max-h-[2rem] px-[5px] rounded-[10px] overflow-x-hidden ${file !== "" ? "" : "hidden"}`} >
      <p className = 'text-md'>{file.name}</p>
    </div>
  )
}

export default Filetrack
