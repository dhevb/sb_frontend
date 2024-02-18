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
import Checkout from './page/Checkout';
import ProductDetailPage from './page/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignupPage/>
    path: "/signup",
    element: <SignupPage/>
  },
  {
    path: "/all-products",
    element: <ProductListPage/>
    path: "/all-products",
    element: <ProductListPage/>
  },
  {
    path: "/confirm-otp",
    element: <OTPConfirmationPage/>
    path: "/confirm-otp",
    element: <OTPConfirmationPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage/>
  },
  {
    path:"*",
    element: <PageNotFound/>
  }
    path:"*",
    element: <PageNotFound/>
  }
])




function App() {
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
    <div>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
