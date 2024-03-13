import React from 'react'
import logo from "../../assets/logo.png"
import harbour from "../../assets/harbourlogo.png"
import itr from "../../assets/itrlogo.png"
import sarvatra from "../../assets/sarvatralogo.png"
import job from "../../assets/joblogo.png"
import shiksha from "../../assets/shikshalogo.png"
import tredul from "../../assets/tredullogo.png"
import dhe from "../../assets/dhelogo.png"
import vidya from "../../assets/vidyabhartilogo.png"
import viksit from "../../assets/viksitlogo.png"
import tudu from "../../assets/tudulogo.png"

export default function FooterTop() {
  return (

      <div className="flex items-center justify-between   border-t-2 border-base-100  bg-base-300 text-center  py-4 px-20 ">
      {/* logos */}
      {/* dhe */}
        
          <a href="https://www.dhe.org.in/">
            <img
            src={dhe}
            alt="dhe"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* rase */}
          <a href="https://www.rase.co.in/">
            <img
            src={shiksha}
            alt="rase"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* temple */}
          <a href="https://www.alltemples.org.in/">
            <img
            src={harbour}
            alt="temple"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* itr */}
          <a href="https://www.itrchandigarh.org/">
            <img
            src={itr}
            alt="itr"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* temple */}
          <a href="https://poojawala.in/">
            <img
            src=""
            alt="pooja"
            className="h-10 w-14 mr-4"  
            />
          </a>
           <a href="https://www.tudu.co.in">
            <img
            src={tudu}
            alt="Logo Alt Text"
            className="h-10 w-10 mr-4"  
            />
          </a> 
          {/* sarvatr */}
          <a href="https://www.sarvatr.co.in/">
            <img
            src={sarvatra}
            alt="sarvatr"
            className="h-10 w-10 mr-4"  
            />
          </a>      
          {/* tredul */}
          <a href="https://tredul.in/">
            <img
            src={tredul}
            alt="tredul"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* job360 */}
          <a href="https://jobs360degree.com/">
            <img
            src={job}
            alt="job"
            className="h-10 w-10 mr-4"  
            />
          </a>
          {/* vikas india  */}
          <a href="https://vi.rase.co.in/">
            <img
            src={viksit}
            alt="vikas"
            className="h-10 w-10 mr-4"  
            />
          </a>
           {/* VIDHYA BHARTI */}
           <a href="https://vidyabharti.net/">
            <img
            src={vidya}
            alt="vidya"
            className="h-10 w-10 mr-4"  
            />
          </a>
         {/*  */}
        </div>
     



  )
}
