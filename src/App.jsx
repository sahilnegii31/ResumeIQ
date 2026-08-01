import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './components/Home'
import Circularscore from './components/Circularscore'
import axios from "axios";

const App = () => {

  const [resumefile, setresumefile] = useState(""); // for resume
  const [jobdesc, setjobdesc] = useState(""); // job description  
  const [loading, setloading] = useState("false"); // for the timeout afteBr file upload
  const [result, setresult] = useState({});   // for storing the result 
  
  const handlefile = (e)=>{
    alert("File uploaded!!")
    const file= e.target.files[0];
    console.log(file)
    setresumefile("file")
  }

  const handleanalysis = async () =>{
    // if(!resumefile){
    //   alert("Please Upload a Resume File");
    //   return ;
    // }
    setloading("true");
    setresult(""); //purane result clear krke dobara analysis kro 

    //API call ka function 

      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {model : "llama-3.3-70b-versatile",
          messages:[
            {
              role:"system",
              content:`You are an ATS (Applicant Tracking System) resume analyzer.
                Analyze the given resume against the job description and respond with ONLY valid JSON — no markdown formatting, no backticks, no explanation text before or after.

                Return the JSON in exactly this structure:
                {
                  "score": <integer 0-100>,
                  "keyword_match_percent": <integer 0-100>,
                  "matched_keywords": ["keyword1", "keyword2"],
                  "missing_keywords": ["keyword1", "keyword2"],
                  "strengths": ["strength1", "strength2"],
                  "improvements": ["improvement1", "improvement2"]
                }`,
            },
            {
              role:"user",
              content: `Resume:\n"hii helo"\n\n
              Job Description:\n"Not Provided"`
            },
            ],
            temperature : 0.3,
          },
            {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const analysis= response.data.choices[0].message.content;
  const finalobj=JSON.parse(analysis);
  console.log(finalobj);
    setresult(finalobj);
  }
  return (
      <Home data={result} handlefile={handlefile} handleanalysis={handleanalysis} result={result} />
  )
}

export default App
