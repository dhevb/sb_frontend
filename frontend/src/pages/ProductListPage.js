import React from 'react'
import ProductList from '../features/Products/components/ProductList'
import Header from '../features/navbar/Header'
import Navbar from '../features/navbar/Navbar'
import FooterTop from '../features/footer/FooterTop'
import Footer from '../features/footer/FooterMiddle'
import FooterBottom from '../features/footer/FooterBottom'

export default function ProductListPage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ProductList/>
      <FooterTop/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
