import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FooterBottom() {
  return (
    <div>     
<footer className="footer items-center bg-black p-2 text-neutral-500">
  <aside className="items-center grid-flow-col">
    <p>Copyright © 2024 - All right reserved by swadeshibazaar.com</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <FaFacebook/>
    <FaInstagram />
    <IoLogoYoutube />
    <FaTwitter />
    <FaLinkedin />
  </nav>
 </footer>
</div>
  )
}
