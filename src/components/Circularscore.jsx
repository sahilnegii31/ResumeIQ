import React from 'react'

const Circularscore = ({result}) => {
    if(!result) return null;  
    if(result.isresume === false){
        return (
            <div className='flex items-center justify-center border-2 rounded-[10px] bg-[#202020] mt-[2rem] h-[4rem] border-[#555] '>
                <h3 className='text-2xl text-red-500'>Not a Resume..</h3>
            </div>

        ) 
    }
  const radius=70;
  const circumference = 2 * 22/7 * radius;
  const offset = circumference - (result?.score/100) * circumference;

  return (
        <div className='my-[2rem] py-[2rem] border-1 border-gray-500 w-full items-center flex flex-col'>
            <h1 className='text-2xl md:text-6xl font-bold'>Your Score Card</h1>
            <div className='my-[1rem]  h-[160px] w-[160px] md:h-[200px] md:w-[200px] flex justify-center items-center relative'>
                <svg width = "200" height="200" viewBox='0 0 180 180' className='absolute'>
                    <circle cx="90" cy="90" r={radius} stroke="#1b1b26" strokeWidth="12" fill='none' />
                    <circle cx='90' cy="90" r={radius} stroke='#BFF230' strokeWidth='12' fill='none' 
                    strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' transform='rotate(-90 90 90)'
                    />
                </svg>
                <div className=''>
                    <h1 className='text-4xl'>{result?.score}</h1>
                </div>
            </div>
            <div className='flex flex-col gap-5 md:flex-row flex-wrap justify-center'>
                <div className='border-1 border-gray-500 p-[20px] bg-[#20231A] rounded-2xl'>
                <h1 className='text-2xl font-bold'>Improvements Required</h1>
                {result.improvements.map((improvements,idx)=>{
                    return <h3 key={idx} className='text-xl text-white '>{idx+1}. {improvements}</h3>
                })}
                </div>
                <div className='border-1 border-gray-500 bg-[#20231A] p-[20px] rounded-2xl'>
                <h1 className='text-2xl font-bold'>Strength</h1>
                {result.strengths.map((strength,idx)=>{
                    return <h3 key={idx} className='text-xl text-white'>{idx+1}. {strength}</h3>
                })}
                </div>
                <div className='border-1 border-gray-500 bg-[#20231A] p-[20px] rounded-2xl'>
                <h1 className='text-2xl font-bold'>Matched Keywords</h1>
                {result.matched_keywords.map((mkey,idx)=>{
                    return <h3 key={idx} className='text-xl text-white'>{idx+1}. {mkey}</h3>
                })}
                </div>
                <div className='border-1 border-gray-500 bg-[#20231A] p-[20px] rounded-2xl'>
                <h1 className='text-2xl font-bold'>Missing Keywords</h1>
                {result.missing_keywords.map((keywords,idx)=>{
                    return <h3 key={idx} className='text-xl text-white'>{idx+1}. {keywords}</h3>
                })}
                </div>
            </div>
        </div>
  )
}

export default Circularscore
