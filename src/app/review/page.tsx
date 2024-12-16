import React from 'react'
import Image from 'next/image'
import pic1 from '@/../../public/images/pic-1.png'
import pic2 from '@/../../public/images/pic-2.png'
import pic3 from '@/../../public/images/pic-3.png'
import { FaStar } from 'react-icons/fa'

const Review = () => {
    return (
        <section className="review" id="review">
            <div className="main-txt">
                <h3>Customers <span>Review</span></h3>
            </div>

            <div className="review-content">
                <div className="box">
                    <div className="image">
                        <Image src={pic1} alt="user pics" className="img"/>
                    </div>
                    <h3>Elon Musk</h3>
                    <div className="star">
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

                </div>
                <div className="box">
                    <div className="image">
                        <Image src={pic2} alt="user pics" className="img"/>
                    </div>
                    <h3>Elon Musk</h3>
                    <div className="star">
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

                </div>
                <div className="box">
                    <div className="image">
                        <Image src={pic3} alt="user pics" className="img"/>
                    </div>
                    <h3>Elon Musk</h3>
                    <div className="star">
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>
                </div>
            </div>
        </section>

    )
}

export default Review