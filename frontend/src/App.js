import React from "react";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Protected from "./features/auth/components/Protected";

// import all pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OrderSuccessfullPage from "./pages/OrderSuccessfullPage";
import ShopPage from "./pages/ShopPage";
import OrdersPage from "./pages/OrdersPage";
import PaymentPage from "./pages/PaymentPage";
import ReplaceOrderPage from "./pages/ReplaceOrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import OTPconfirmationPage from "./pages/OTPconfirmationPage";
import ProductListPage from "./pages/ProductListPage";

// root Routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
  {
    path : '/shop',
    element : <ShopPage></ShopPage>
  },
  {
    path : '/orders',
    element : <OrdersPage></OrdersPage>
  },
  {
    path : '/login',
    element : <LoginPage></LoginPage>
  },
  {
    path : '/signup',
    element : <SignupPage></SignupPage>
  },
  {
    path : '/successfull',
    element : <OrderSuccessfullPage></OrderSuccessfullPage>
  },
  {
    path : '/cart',
    element : <CartPage></CartPage>
  },
  {
    path : '/checkout',
    element : <Checkout></Checkout>
  },
  {
    path : '/forget',
    element : <ForgotPasswordPage></ForgotPasswordPage>
  },
  {
    path : '/payment',
    element : <PaymentPage></PaymentPage>
  },
  {
    path : '/replace',
    element : <ReplaceOrderPage></ReplaceOrderPage>
  },
  {
    path : '/user-profile',
    element : <UserProfilePage></UserProfilePage>
  },
  {
    path : '/otp-confirmation',
    element :<OTPconfirmationPage></OTPconfirmationPage>
  },
  {
    path : '/product-list',
    element :<ProductListPage></ProductListPage>
  },
  {
    path : '*',
    element : <PageNotFound></PageNotFound>
  },



])


function App() {
  return (
    <main>
      <RouterProvider router = {router}></RouterProvider>
    </main>
  );
}

export default App;
