import React from 'react';
import Cart from '../features/cart/Cart';
import Header from '../features/navbar/Header';
import Navbar from '../features/navbar/Navbar';

export default function CartPage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Cart/>
    </div>
  )
}
