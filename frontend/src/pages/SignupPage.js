import React, { useState } from 'react';
import Signup from '../features/auth/components/Signup';
import Header from '../features/navbar/Header';
import Footer from '../features/footer/FooterMiddle';
import FooterBottom from '../features/footer/FooterBottom';

export default function SignUp() {


  return (

    <div>
      <Header/>
      <Signup/>
      <FooterBottom/>
    </div>
  );
}