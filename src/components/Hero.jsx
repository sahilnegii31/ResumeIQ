import React from 'react'

const Hero = () => {

  return (
    <div className='py-[5rem] mt-[6rem] md:px-[5rem] text-center bg-[#0a0a0a]'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-5xl md:text-6xl  font-bold'>ResumeIQ</h1>
            <h3 className='text-[20px] md:text-3xl text-[#855ccd]'>Beat the Bots, Land the interview.</h3>
            <p className='text-[15px] px-[10px] md:text-2xl text-[#888]'>
              Upload your resume, get a real ATS compatibility score, and now exactly what's holding you back - before a recruiter ever sees it.
            </p>
            <div className='flex items-center flex-col gap-2 w-full px-[20px]'>
              <a href='#upload' className='px-[30px] py-[10px] md:py-[20px] border-1 text-xl font-bold w-[15rem] md:w-[20rem] cursor-pointer hover:scale-110 transition-transform border-gray-500 rounded-xl font-[Milonga]'>Analyze My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
