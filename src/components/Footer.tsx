import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../../public/images/logo.png'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
     <footer id="footer">
     <div className="footer-content">
         <div className="logo">
             <Image src={logo} alt="logo" className='img' />
         </div>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore suscipit nisi non, laudantium delectus?
             <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!
         </p>
         <div className="social-links">
             <FaTwitter className='icon' />
             <FaFacebookF className='icon' />
             <FaInstagram className='icon' />
             <FaYoutube className='icon' />
             <FaPinterestP className='icon' />
         </div>
     </div>
     <hr />
     <div className="footer-bottom-content">
         <p>Designed By <Link href="#" className='link'>Farwa Kanwal</Link></p>
         <div className="copyright">
             <p>&copy;Copyright <strong>Farwa</strong>.All Rights Reserved</p>
         </div>
     </div>
 </footer>
  )
}

export default Footer;