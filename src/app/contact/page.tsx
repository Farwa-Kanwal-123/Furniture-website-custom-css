import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'


const Contact = () => {
    return (
        <section>
            <section className="contact" id="contact">
                <div className="content-text">
                    <h2>Get In <span>Touch</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, harum. Sint recusandae in suscipit blanditiis, neque eos quam praesentium impedit?</p>
                    <div className="list">
                        <li><Link href="#" className='link'>+9200000000000000</Link></li>
                        <li><Link href="#" className='link'>example@gmail.com</Link></li>
                        <li><Link href="#" className='link'>Pakistan Sindh Karachi</Link></li>
                    </div>
                </div>

                <div className="contact-form">
                    <form action="#">
                        <input type="name" placeholder="Name" required />
                        <input type="number" placeholder="Phone" required />
                        <input type="email" placeholder="Email" required />
                        <textarea name="" id="" cols={35} rows={10}
                            placeholder="Message"></textarea>
                        <input type="submit" value="Send" className="submit" required />

                    </form>
                </div>
            </section>
           {/* footer */}
           <Footer/>

           
        </section>
    )
}

export default Contact