import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    
    <div className='bg-white pt-6 pb-28'>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base text-lg font-bold">LOGO</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-success sm:text-8xl">oops...</h1>
          <p className="mt-8 text-lg sm:text-2xl font-medium leading-7 text-gray-700">The page your were looking for could not be found.</p>
          <p className="text-base text-sm text-gray-500">It seems this page is missing. Please check the URL or go home.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to = "/"
              className="rounded-md bg-success px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <div href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}
