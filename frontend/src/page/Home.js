import React from 'react'
import FooterTop from '../features/footer/FooterTop';
import Footer from '../features/footer/FooterMiddle';
import FooterBottom from '../features/footer/FooterBottom';
import Header from '../features/navbar/Header';
import Navbar from '../features/navbar/Navbar';
import CategoriesSlides from '../features/hero/CategoriesSlides';
import Carousel from '../features/hero/Carousel';
import DealandOffers from '../features/hero/DealandOffers'
import ShopByCategories from '../features/hero/ShopByCategories'
import Slider from '../features/hero/slider'
export default function Home() {

   

  return (
    <div className='bg-base-200'>
        <Header/>
        <Navbar/>
    <div className='mt-2'></div>    
        <CategoriesSlides/>
        <Carousel/>

        <div className='mx-6 p-6 '>
        <DealandOffers/>
        </div>
        <Slider />
        <ShopByCategories/>
        <FooterTop/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}
