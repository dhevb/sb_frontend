import React, { useState } from 'react';
import Header from '../features/navbar/Header';
import Login from '../features/auth/components/Login';
import Footer from '../features/footer/FooterMiddle';
import FooterBottom from '../features/footer/FooterBottom';

export default function LoginPage() {
 

  return (
     <>
     <Header/>
     <Login/>
     <FooterBottom/>
     </>

  );
}