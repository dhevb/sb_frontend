import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import { createUser } from '../authAPI'; // Import the API function for signup

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role:"user" // Default role is set to 'user'
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (data) => {
    setValues(prev => ({ ...prev, [data.target.name]: data.target.value }));
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      createUser(values)
        .then((res) => {
          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='bg-base-200'>
      <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md"></div>
        <div className="mt-8 sm:mx-auto bg-base-100 sm:w-full sm:max-w-md">
          <div className="bg-layer-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h1 className="text-center text-3xl font-semibold text-heading">Join Us</h1>
            <p className="mb-4 mt-2 text-center text-sm text-text">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-success hover:text-primary-accent">
                Login
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-heading">Name</label>
                <input
                  id="name"
                  placeholder="Type your name"
                  name="name"
                  type="text"
                  onChange={handleInput}
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
                />
                {errors.name && <span className='text-danger'>{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-heading">Email or Phone</label>
                <input
                  id="email"
                  placeholder="Type your email or phone no."
                  name="email"
                  type="email"
                  onChange={handleInput}
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
                />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-heading">Password</label>
                <input
                  id="password"
                  placeholder="Type password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
                />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-heading">Role</label>
                <select
                  id="role"
                  name="role"
                  onChange={handleInput}
                  value={values.role}
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading focus:border-success focus:outline-none focus:ring-0 sm:text-sm"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-success bg-success px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
              >
                Get OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
