import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FooterBottom() {
  return (
    <div>     
<footer className="footer items-center bg-black py-2 md:px-20 px-6 text-neutral-500">
  <aside className="items-center grid-flow-col">
    <p>Copyright © 2024 - All right reserved by swadeshibazaar.com</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <FaFacebook className='hover:text-success'/>
    <FaInstagram className='hover:text-success'/>
    <IoLogoYoutube className='hover:text-success'/>
    <FaTwitter className='hover:text-success'/>
    <FaLinkedin className='hover:text-success'/>
  </nav>
 </footer>
</div>
  )
}
