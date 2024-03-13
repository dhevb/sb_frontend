import React,{useEffect,useState} from 'react'
import Navbar from '../features/navbar/Navbar'
import Hero from '../features/hero/Hero'
import Carousel from '../features/hero/Carousel'
import DealandOffers from '../features/hero/DealandOffers'
import ProductsOfWeek from '../features/hero/ProductsOfWeek'
import ShopByCategories from '../features/hero/ShopByCategories'
import Header from '../features/navbar/Header'
import HomeSlider from '../features/hero/HomeSlider'
import FooterBottom from '../features/footer/FooterBottom'
import Footer from '../features/footer/FooterMiddle'
import FooterTop from '../features/footer/FooterTop'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
export default function Home() {


  let slides = [
    "https://as1.ftcdn.net/v2/jpg/02/66/40/40/1000_F_266404077_U620rNn9gWl7wZ6JT2QG0nSg6k8Xdwfy.jpg",
    "https://sunova.in/wp-content/uploads/2021/02/Herbal-Medicine-Why-do-people-use-it.jpg",
    "https://www.nutraingredients-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/news/research/supplements-education-nz-healthcare-professionals-interested-in-herbal-medicine-training-as-usage-grows/12212044-1-eng-GB/Supplements-education-NZ-healthcare-professionals-interested-in-herbal-medicine-training-as-usage-grows.jpg"
  ]
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <div className='w-[50%]  mx-auto pt-6 pb-6'>
     <Carousel slides={slides} />
    </div>
    <div className='mx-6 p-6 '>
    <DealandOffers/>
    <ProductsOfWeek/>
    
    </div>
    <ShopByCategories/>
    <HomeSlider/>
    <FooterTop/>
    <Footer/>
    <FooterBottom/>
    </>
  )
}
