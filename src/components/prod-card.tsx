import React from 'react';
import Image from 'next/image';

// Props type definition
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="row">
      <Image src={image} alt={title} height={250} width={100} className='img' />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>Price: ${price}</h5>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
