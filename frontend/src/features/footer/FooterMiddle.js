import React from 'react'

export default function Footer() {
  return (
   
   <div className='bg-base-100'>
  

<footer className="footer justify-between py-6 px-6  md:px-20 bg-base-100 text-base-content">
 <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Products</h6> 
    <a className="link link-hover">E-Cycle</a>
    <a className="link link-hover">Diye</a>
    <a className="link link-hover">Books</a>
  </nav> 

<form>
    <h6 className="footer-title">Newsletter</h6> 

    <fieldset className="">
        <input type="text" placeholder="Enter your mail" className="input input-bordered pr-6" /> 
    </fieldset>
    <fieldset className="">
        <textarea type="text" placeholder="Enter you Query" className="input input-bordered pr-10" /> 
    </fieldset>
    <button className='btn btn-success px-24'>Send</button>
  </form>
 
</footer>



    </div>
  )
}
