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
import OrderSuccessPage from './page/OrderSuccessPage';
import UserOrdersPage from './page/UserOrdersPage';
import UserProfilePage from './page/UserProfilePage';
import AdminProductFormPage from './page/AdminProductFormPage';
import AboutUsPage from './page/AboutUsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/all-products",
    element: <ProductListPage/>
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage/>
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
    element: <CartPage/>
  },
  {
    path: '/profile',
    element: (
      <UserProfilePage></UserProfilePage>
    ),
  },
  
  {
    path: "/checkout",
    element:<Protected><Checkout/></Protected>
  },
  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
      // we will add Page later right now using component directly.
    ),
  },
  {
    path: "add-product",
    element: <AdminProductFormPage/>
  },
  {
    path: "about-us",
    element: <AboutUsPage/>
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
    
    dispatch(fetchItemsByUserIdAsync(localStorage.getItem("id")))
  
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
