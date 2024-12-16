import React from 'react'
import Image from 'next/image'
import about_pic from '@/../../public/images/about-img.png'
import { FaHeadset, FaShoppingCart, FaTruck } from 'react-icons/fa'
import { FaRotateLeft } from 'react-icons/fa6'

const About = () => {
    return (
        <section>
            <section className="about" id="about">
                <div className="about-img">
                    <Image src={about_pic} alt="about section image" className='img' />
                </div>
                <div className="about-text">
                    <h3>Furniture service About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo maxime, eligendi nesciunt quis quaerat cupiditate rerum enim obcaecati eum totam facilis, sunt tempore libero officia. Ad, excepturi. Qui, voluptatem officia aspernatur iure nam, architecto quos molestiae assumenda nesciunt porro voluptatum dolorum consequatur odit. Laudantium saepe sunt perspiciatis dolores ex.</p>

                    <button id="about-btn">Read More...</button>
                </div>

                {/* card section */}
            </section>
            <section className="offers">
                <div className="offer-content">
                    <div className="row">
                        <FaTruck className='icon' />
                        <h3>Free Delivery</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="row">
                        <FaHeadset className='icon' />
                        <h3>Support 24/7</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="row">
                        <FaRotateLeft className='icon' />
                        <h3>30 Day Return</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="row">
                        <FaShoppingCart className='icon' />
                        <h3>Secure Shopping</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default About;