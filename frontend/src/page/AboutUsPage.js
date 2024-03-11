import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import Header from '../features/navbar/Header';
import Navbar from '../features/navbar/Navbar';

export default function AboutUsPage() {
  return (
    <div>
       <Header/>
       <Navbar/>
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
    <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-success ">About Us</p>
        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tigh md:text-3xl ">Explore and support the essence of 'Made in India' with us.</h2>
        <p className="font-light  sm:text-xl ">SwadeshiBazaar.co.in is a Swadeshi e-commerce portal dedicated to promoting and selling only indigenous products. Born out of a desire to support local sellers and address the challenges faced by traditional vendors, our platform is a free space for Swadeshi businesses to reach a wider audience. From traditional handicrafts to Swadeshi books, especially Vidya Bharti books, our platform is a celebration of India's diverse cultural and economic landscape.
</p>
        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
                <a href="#" className="inline-flex items-center text-base font-medium text-success">
                    Mission  </a>
                    <p className="font-light sm:text-xl ">SwadeshiBazaar.co.in is on a mission to champion and promote indigenous products, fostering a platform that exclusively showcases Swadeshi items. Our mission is to empower local artisans, entrepreneurs, and sellers by providing them a free and accessible e-commerce portal to showcase and sell their Swadeshi products. Through this initiative, we aim to contribute to the growth of Swadeshi businesses and preserve the rich cultural heritage of our nation.
</p>
               
            </div>
            <div>
                <a href="#" className="inline-flex items-center text-base font-medium text-success">
                    Vision
                </a>
                <p className="font-light  sm:text-xl ">Our vision at SwadeshiBazaar.co.in is to create a thriving online marketplace that celebrates and supports Swadeshi enterprises. We aspire to be the go-to platform for consumers seeking authentic, locally-made products while simultaneously providing a sustainable and empowering space for Swadeshi sellers to showcase their craftsmanship. Through this vision, we hope to contribute to the economic empowerment of local communities across India.
</p>

<h2 className="mt-6 pt-6 text-3xl font-extrabold tracking-tight  md:text-3xl ">Future Scope <FaLongArrowAltRight className='text-success'/></h2>
            </div>
        </div>
    </div>
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
    
        <div>
           <BiSolidCategory className="w-10 h-10 mb-2 text-success md:w-12 md:h-12 "/>
            <h3 className="mb-2 text-2xl font-bold ">Expanded Product Categories</h3>
            <p className="font-light ">SwadeshiBazaar.co.in envisions expanding its product categories to include a diverse range of Swadeshi items, from traditional clothing and accessories to organic food products, ensuring a comprehensive representation of indigenous craftsmanship.
</p>
        </div>
        <div>
            <svg className="w-10 h-10 mb-2 text-success md:w-12 md:h-12 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">Regional Outreach Programs</h3>
            <p className="font-light ">Initiatives to reach and empower sellers from different regions of India will be implemented, fostering a sense of inclusivity and ensuring the platform's impact is felt across the nation.
</p>
        </div>
        <div>
            <svg className="w-10 h-10 mb-2 text-success md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
            </svg>
            <h3 className="mb-2 text-2xl font-bold ">Community Engagement</h3>
            <p className="font-light ">plans to introduce community engagement features, such as forums and discussions, to build a sense of community among sellers and customers, encouraging dialogue and feedback.
</p>
        </div>
        <div>
            <MdCastForEducation className="w-10 h-10 mb-2 text-success md:w-12 md:h-12"/>
            <h3 className="mb-2 text-2xl font-bold ">Education and Awareness</h3>
            <p className="font-light ">The platform aims to contribute to the promotion of Swadeshi ideals by integrating educational resources, providing information about the significance of indigenous products, and creating awareness about the positive impact of supporting local businesses.
</p>
        </div>
    </div>
     </div>

    </div>
  )
}
