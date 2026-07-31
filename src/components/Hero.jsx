import React from 'react'

const Hero = () => {

  return (
    <div className='py-[5rem] mt-[6rem] text-center bg-[#0a0a0a]'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h2 className='text-5xl md:text-6xl  font-bold'>ResumeIQ</h2>
            <h3 className='text-[17px] md:text-xl text-[#855ccd]'>Beat the Bots, Land the interview.</h3>
            <p className='text-[15px] px-[10px] md:text-2xl text-[#888]'>
              Upload your resume, get a real ATS compatibility score, and now exactly what's holding you back - before a recruiter ever sees it.
            </p>
            <div className='flex flex-col gap-2 w-full px-[20px]'>
              <button className='px-[30px] py-[10px] border-1 font-bold md:w-fit cursor-pointer hover:scale-110 transition-transform border-gray-500 rounded-xs'>Analyze My Resume</button>
              <button className='px-[30px] py-[10px] border-1 font-bold md:w-fit cursor-pointer hover:scale-110 transition-transform border-gray-500 rounded-xs'>See how it works</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
