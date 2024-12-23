import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <a href="/product-details" className="btn">View Details</a>
    </div>
  );
};

export default ProductCard;
