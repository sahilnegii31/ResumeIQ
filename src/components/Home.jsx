import React, { useRef, useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import {features, work} from './data'
import Circularscore from './Circularscore'
import Footer from './Footer'
import HoldButton from './HoldButton'
import Filetrack from './Filetrack'


const Home = ({data,handleanalysis,handlefile,result,jobdesc,setjobdesc , isdelete, file}) => {



  const fileInputRef=useRef(null);
  return (
    <div>

      <Navbar />
      <Hero />

      <section className='text-center items-center flex flex-col gap-[5rem] justify-center mx-5'>
        <h1 className='text-5xl md:text-6xl font-bold'>How It Works ? </h1>
        <div className='flex flex-col '>
        {work.map((work,idx)=>{
            return (
                <div className='flex flex-col min-w-[20rem] md:min-w-[50rem] w-[20rem] border-1 h-fit min-h-[12rem] p-[20px] border-gray-700 cursor-pointer highlite relative  items-center gap-4' key={idx} >
                    <h1 className='text-xl md:text-3xl'>{work.number} -  {work.title}</h1>
                    <p className='text-[17px] '>{work.description}</p>
                </div>
            )
        })}
        </div>
      </section>
      <section className='my-[3rem] text-center items-center flex flex-col gap-[3rem] justify-center mx-5'>
        <h1 className='text-5xl md:text-6xl font-bold'>Features</h1>
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
      <section id='upload' className='w-full flex flex-col items-center px-[20px] md:px-[5rem]'>
        <div className='md:mx-[5rem] w-full py-[50px] text-center items-center flex flex-col gap-5 border-1 border-gray-600 px-[30px]'>
          <h1 className='text-2xl md:text-6xl font-bold'>Upload your Resume</h1>
          <input type="file" accept='.pdf' ref={fileInputRef} onChange={handlefile} className='hidden bg-gray-700 px-[1rem] text-center'/>
          <div className='flex  flex-col gap-4'>
          <button 
          onClick={()=>{fileInputRef.current.click()}}
          className=' w-full md:w-[20rem] px-[30px] py-[10px] border-1 font-bold cursor-pointer opacity-50 hover:opacity-100 transition-transform border-gray-500  rounded-[10px]'>
            Browse files
          </button>
          <div>
            <div className='flex flex-col gap-5 md:flex-row'>
              <textarea type="text" onChange={(e) =>{setjobdesc(e.target.value)}} value={jobdesc} placeholder='Enter Job Description' className=' max-h-[10rem] w-full md:w-[20rem] px-[30px] py-[10px] border-1 min-h-[3rem] font-bold border-gray-500 rounded-[10px] '  />
              <button onClick={()=> handleanalysis(jobdesc)} 
              className=' w-full md:w-[15rem]  border-1 font-bold cursor-pointer opacity-50 hover:opacity-100 transition-transform border-gray-500 rounded-xl'>
                Analyse</button>
              <Filetrack file = {file} />  
              <HoldButton isdelete = {isdelete} file = {file} />
            </div>
          </div>
          </div>
        </div>
        <div className={`w-full ${result ? "" : "hidden"}`}>
          <Circularscore result={result} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
