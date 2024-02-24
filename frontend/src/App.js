import React from 'react';
import { Counter } from './features/counter/Counter';


import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
}  from  "react-router-dom"

// import all pages here
import Home from './page/Home';
import LoginPage from './page/LoginPage'
import PageNotFound from './page/PageNotFound';
import ProductListPage from './page/ProductListPage';
import SignupPage from './page/SignupPage';
import OTPConfirmationPage from './page/OTPConfirmationPage';
import CartPage from './page/CartPage';
import CheckoutPage from './page/CheckoutPage';
import ProductDetailPage from './page/ProductDetailPage';
import ForgotPassword from './features/auth/componets/ForgotPassword';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignupPage/>
  },
  {
    path: "/all-products",
    element: <ProductListPage/>
    
  },
  {
    path: "/confirm-otp",
    element: <OTPConfirmationPage/>
 
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  
  {
    path: "/checkout",
    element: <CheckoutPage/>,
   
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path:"*",
    element: <PageNotFound/>
  },
 
])




function App() {
  return (
    <>
    <div>
      <RouterProvider router = {router} />
    </div>
  
    </>
  );
}

export default App;
