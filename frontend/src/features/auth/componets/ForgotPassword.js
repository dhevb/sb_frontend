import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../authAPI';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (data) => {
    setEmail(data.target.value);
  };

  const handleSubmit = async (data) => {
    data.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await forgotPassword(email); // Call the ForgotPassword function from authApi
      const responseData = await response.json();
      setMessage(responseData.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Error sending email');
    }
  
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo2 (3).png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter email to reset password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Send Email
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}
        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          Send me back to {' '}
          <Link
            to="/login"
            className="font-semibold leading-6 text-teal-600 hover:text-teal-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
