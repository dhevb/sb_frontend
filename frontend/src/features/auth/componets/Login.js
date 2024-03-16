import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import {
  createUser,
  checkUser,
} from '../authAPI'; // Import the API functions

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (data) => {
    setValues(prev => ({ ...prev, [data.target.name]: data.target.value }));
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      checkUser(values) // Use checkUser function from authApi
         .then((res) => {
            navigate('/');
          }) 
       .catch((err) => console.log(err));
    }
  };
   const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8081/auth/google'; // Replace with your backend's Google OAuth login route
  };


  return (
    <div>
    <div className='bg-base-200'>

<div className="flex flex-col  justify-center pt-10 pb-14 sm:px-6 lg:px-8">
  <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">

  </div>

  <div className="mt-8 sm:mx-auto bg-base-100 sm:w-full sm:max-w-md">
    <div className="bg-layer-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h1 className="text-center text-3xl font-semibold text-heading">
        Welcome Back!
      </h1>
      <p className="mt-2 mb-4 text-center text-sm text-text">
      No account?{" "}
      <Link
        to="/signup"
        className="font-semibold text-success hover:text-primary-accent"
      >
        Sign up
      </Link>
    </p>
    <form action=""onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-heading"
          >
            Email or phone
          </label>
          <input
            id="email"
            placeholder='Type your email or phone no.'
            name="email"
            type="email"
            onChange={handleInput}
            className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
          />
          {errors.email &&<span className="text-red-500">{errors.email}</span>}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-heading"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            placeholder='Type your password'
            type="password"
            onChange={handleInput}
            className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
          />
          {errors.password &&<span className="text-red-500">{errors.password}</span>}
        </div>

                <div className="flex justify-end">
                  <a
                    href="/forgot-password"
                    className="text-sm font-semibold text-success hover:text-primary-accent"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-success bg-success px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Login
                </button>

                <button 
                  type="button"
                  onClick={handleGoogleLogin}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
                >
                  <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

