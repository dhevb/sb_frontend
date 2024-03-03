import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
   createBrowserRouter,
   RouterProvider,
}  from  "react-router-dom"

// import all pages here
import Home from './page/Home';
import LoginPage from './page/LoginPage'
import PageNotFound from './page/PageNotFound';
import ProductListPage from './page/ProductListPage';
import SignupPage from './page/SignupPage';
import OTPConfirmationPage from './page/OTPConfirmationPage';
import CartPage from './page/CartPage';
import ProductDetailPage from './page/ProductDetailPage';
import ForgotPassword from './features/auth/componets/ForgotPassword';
import Protected from './features/auth/componets/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import Checkout from './page/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/all-products",
    element: <Protected><ProductListPage/></Protected>
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage/></Protected>
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
    path: "/cart",
    element: <Protected><CartPage/></Protected>
  },
  
  {
    path: "/checkout",
    element:<Protected><Checkout/></Protected>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path:"*",
    element: <PageNotFound/>
  },
 
])




function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <>
    <div>
      <RouterProvider router = {router} />
    </div>
  
    </>
  );
}

export default App;
