import React, { useState } from 'react'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs";


export default function Carousel({slides}) {

    let [current, setCurrent] = useState(0);
    
    let previousSlide = () => {
      if(current===0) setCurrent(slides.length-1);
      else setCurrent(current-1) ;
    }

    let nextSlide = () => {
        if(current===slides.length-1) setCurrent(0);
        else setCurrent(current + 1) ;
      }

  return (
    <div className='overflow-hidden relative'>
       <div className={`flex transition ease-out duration-400`}
       style = {{
        transform: `translateX(-${current * 100}% )`,
       }}
       >
         {slides.map((s) => {
            return <img src = {s} />
         })}
       </div>

       <div className='absolute top-0 h-full w-full justify-between items-center flex text-success px-10 text-xl'>
        <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
        </button>
        <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
        </button>
       </div>
    </div>
  )
}
