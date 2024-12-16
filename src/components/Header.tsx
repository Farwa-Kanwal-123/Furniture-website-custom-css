import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from  '@/../../public/images/logo.png'
import { IoMenu } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
const Header = () => {
    return (
        <header className="header">
                <nav>
                    <input type="checkbox" id="show-search"/>
                        <input type="checkbox" id="show-menu"/>
                            <label htmlFor="show-menu" className="menu-icon"><IoMenu/></label>
                            <div className="content">
                                <div className="logo"><Link href={"/"}><Image src={logo} alt="logo" className='img'/></Link></div>

                                <ul className="links">
                                    <li><Link href="/" id="first" className="link">Home</Link></li>
                                    <li><Link href="/about" className="link">About</Link></li>
                                    <li><Link href="/products" className="link">Products</Link></li>
                                    <li><Link href="/gallery" className="link">Gallery</Link></li>
                                    <li><Link href="/review" className="link">Reviews</Link></li>
                                    <li><Link href="/contact" className="link">Contact</Link></li>
                                </ul>
                            </div>
                            <label htmlFor="show-search" className="search-icon"><FaSearch /></label>
                            <form action="#" className="search-box">
                                <input type="text" placeholder="Search" required/>
                                    <button type="submit" className="go-icon"><GoArrowRight /></button>
                            </form>
                        </nav>

        </header>
    )
}

export default Header