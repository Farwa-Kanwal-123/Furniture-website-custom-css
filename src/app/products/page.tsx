import React from 'react'

import ProductCard from '@/components/prod-card';

const Products = () => {
    return (
        <section>
            <section className="product" id="product">
                <div className="main-txt">
                    <h3>Products</h3>
                </div>
                <div className="card-content">
                    <ProductCard image='/images/p1.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p2.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p3.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p4.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />

                </div>
                <div className="card-content">
                    <ProductCard image='/images/p5.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p6.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p7.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p8.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />

                </div>


            </section>



            {/* Banner Start */}
            <section className="banner">
                <div className="banner-content">
                    <h5>Get Discount Up To 50%</h5>
                    <h3>Best Deal For Weak</h3>
                    <p>Get up to 50% off this weak and get offer <br />Don&#39;t miss</p>
                    <button><a href="#products">Order</a></button>
                </div>
            </section>
            {/*Banner End */}



            {/* <!-- Sale Products Start --> */}

            <section className="product" id="products" style={{ marginTop: '50px' }}>
                <div className="main-txt">
                    <h3>50% off products</h3>
                </div>
                <div className="card-content">
                    <ProductCard image='/images/p9.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p10.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p11.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                    <ProductCard image='/images/p12.png' title='Chair ' description='Lorem ipsum dolor sit amet.' price={999} />
                </div>
            </section>
        </section>
    )
}
export default Products







