import React from 'react'

const Circularscore = () => {
    const score=70;
  const radius=70;
  const circumference = 2 * 22/7 * radius;
  const offset = circumference - (score/100) * circumference;
    return (
        <div className='relative'>
        <svg width = " 160" height="180" viewBox='0 0 180 180'>
            <circle cx="90" cy="90" r={radius} stroke="#1b1b26" strokeWidth="12" fill='none' />
            <circle cx='90' cy="90" r={radius} stroke='#7c6ff5' strokeWidth='12' fill='none' 
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' transform='rotate(-90 90 90)'
            />
        </svg>
            <div className=' absolute top-17 left-14'>
                <h1 className='text-4xl'>90</h1>
            </div>
        </div>
  )
}

export default Circularscore
