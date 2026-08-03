import React, { useState } from 'react'
import Home from './components/Home'
import Circularscore from './components/Circularscore'
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import workSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workSrc;

const App = () => {

  const [resumefile, setresumefile] = useState(""); // for resume
  const [resumetext, setresumetext] = useState(""); // extracted text 
  const [jobdesc, setjobdesc] = useState(""); // job description  
  const [loading, setloading] = useState(false); // for the timeout afteBr file upload
  const [result, setresult] = useState(null);   // for storing the result 
  
  const handlefile = (e)=>{
    const file= e.target.files[0];
    setresumefile(file)// save pdf text into resumefile
  }

  //PDF to TEXT file 

  const extracttext = async (file)=>{
    const arraybuffer = await file.arrayBuffer()
    const pdf = await pdfjsLib.getDocument({data: arraybuffer}).promise;
    let fulltext= "";
    for(let i=1;i<=pdf.numPages;i++){
      const page = await pdf.getPage(i);
      const textcontent = await page.getTextContent();
      const pagetext= textcontent.items.map(item => item.str).join(" ");
      fulltext+=pagetext + '\n';
    }
    return fulltext;
  }

  const handleanalysis = async (jd) =>{
    if(!resumefile){
      alert("Please Upload a Resume File");
      return ;
    }
    alert("Successfully Uploaded!!")
    setjobdesc(jd);
    setloading("true");
    setjobdesc("");
    setresult(null); //purane result clear krke dobara analysis kro 

    const text = await extracttext(resumefile);
    setresumetext(text);

    


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
              content: `Resume text :\n${text}\n\n
              Job Description:\n${jobdesc}`
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
    setresult(finalobj);
  }
  return (
      <Home data={result} jobdesc={jobdesc} setjobdesc={setjobdesc} handlefile={handlefile} handleanalysis={handleanalysis} result={result} />
  )
}

export default App
