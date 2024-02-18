import React from 'react'
import ProductList from '../features/productList/ProductList';
import Header from '../features/navbar/Header';
import Navbar from '../features/navbar/Navbar';

export default function ProductListPage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ProductList/>
    </div>
  )
}
