import React, { useRef } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import {features, work} from './data'
import Circularscore from './Circularscore'

const Home = ({data,handleanalysis,handlefile,result}) => {
  const fileInputRef=useRef(null);
  return (
    <div>
      <Navbar />
      <Hero />
      <button onClick={handleanalysis}> click me</button>
      <section className='text-center items-center flex flex-col gap-[5rem] justify-center mx-5'>
        <h1 className='text-6xl font-bold'>How It Works ? </h1>
        <div className='flex flex-col '>
        {work.map((work,idx)=>{
            return (
                <div className='flex min-w-[20rem] md:min-w-[50rem] w-fit border-1 h-fit min-h-[12rem] p-[20px] border-gray-700 cursor-pointer highlite relative  items-center gap-4' key={idx} >
                    <p className='text-2xl '>{work.id}.</p>
                    <p className='text-2xl '>{work.desc}.</p>
                </div>
            )
        })}
        </div>
      </section>
      <section className='my-[3rem] text-center items-center flex flex-col gap-[3rem] justify-center mx-5'>
        <h1 className='text-6xl font-bold'>Features</h1>
          <div className='flex flex-col gap-3'>
          {features.map((features,idx)=>{
            return (
              <div className='flex flex-col gap-3 bg-[#14141c] px-[50px] py-[50px]' key={idx} >
                <h1 className='text-2xl font-bold md:text-3xl'>{features.title}</h1>
                <p className='md:text-xl'>{features.description}</p>
              </div>
            )
          })}
          </div>
      </section>
      <section>
        <div className='mx-[5rem] py-[50px] flex flex-col gap-10 border-1 border-gray-600 px-[30px]'>
          <h1 className='text-6xl font-bold'>Upload your Resume</h1>
          <input type="file" accept='.pdf' ref={fileInputRef} onChange={handlefile} className='hidden bg-gray-700 px-[1rem] text-center'/>
          <button 
          onClick={()=>{fileInputRef.current.click()}}
          className='px-[30px] py-[10px] border-1 font-bold md:w-fit cursor-pointer hover:scale-110 transition-transform border-gray-500 rounded-xs'>
            Browse files
          </button>
        </div>
          <Circularscore result={result} />
      </section>
    </div>
  )
}

export default Home
