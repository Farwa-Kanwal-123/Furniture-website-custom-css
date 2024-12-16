import React from 'react'
import Image from 'next/image'
import pic1 from '@/../../public/images/g1.png'
import pic2 from '@/../../public/images/g2.png'
import pic3 from '@/../../public/images/g3.png'

const Gallery = () => {
  return (
    <section className="gallary">
      <h3>Our Gallary</h3>
      <div className="gallary-img">
        <div className="img1">
          <Image src={pic1} alt="our gallery photos" className="img" />
        </div>
        <div className="img1">
          <Image src={pic2} alt="our gallery photos" className="img" />
          <Image src={pic3} alt="our gallery photos" className="img" />
        </div>
      </div>

    </section>
  )
}

export default Gallery