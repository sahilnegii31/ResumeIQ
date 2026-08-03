import React from 'react'
const footer = () => {
  return (
      <div className='text-center mt-5  border-t-1 border-gray-500 pt-5 flex gap-5 flex-wrap justify-evenly h-fit w-full'>
        <div className='w-full items-center text-center justify-center flex flex-wrap gap-5'>
          <h1 className='text-2xl md:text-4xl font-bold'>ResumeIQ</h1>
          <p className='text-gray-400 text-[10px] md:text-xl pb-[1rem]'>

            AI-powered resume analysis — built to help students 
            get real, honest feedback before recruiters see it.

            Built with React, Tailwind CSS & Groq AI
            
           </p>           
            <p className='text-yellow-500 w-full py-[1rem]'>
                © 2026 ResumeIQ. Developed by Sahil.
            </p>
        </div>
      </div>
  )
}

export default footer
