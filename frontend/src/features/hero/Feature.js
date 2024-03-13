import React from 'react'
import { IoIosReturnLeft } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineBusiness } from "react-icons/md";

export default function Feature() {
  return (


    <div className='py-6 bg-base-300'>
<div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between  my-10">
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-4 border-orange-400 p-3">
            <TiTickOutline className="w-6 h-6"/>
        </div>
        <h3 className="text-xl font-bold">Free Selling Platform</h3>
        <p className='text-sm'>swadeshibazaar.co.in provides a free and accessible platform for sellers to showcase and sell their Swadeshi products, eliminating the barriers faced by street vendors.
</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-4 border-orange-400 p-3">
        <FaBookOpen className="w-6 h-6"/>
        </div>
        <h3 className="text-xl font-bold">Swadeshi Books</h3>
        <p className='text-sm' > A special focus on Swadeshi books, including Vidya Bharti publications, promotes indigenous literature, education, and knowledge dissemination.
</p>
    </div>
    <div className="grid gap-4 justify-items-center text-center md:flex-1">
        <div className="rounded-full border-4 border-orange-400 p-3">
            <MdOutlineBusiness  className="w-6 h-6"/>
              
        </div>
        <h3 className="text-xl font-bold">Artisans and Entrepreneurs</h3>
        <p className='text-sm'>The platform aims to support local artisans and entrepreneurs by providing them with a digital storefront to expand their reach and connect with a broader customer base.
</p>
    </div>
</div>
</div>



  )
}
