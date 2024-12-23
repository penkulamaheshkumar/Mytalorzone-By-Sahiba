import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import './Product.css';
import shirtImage from '../assets/images/shirt.jpeg';
import jeansImage from '../assets/images/jeans.jpg';
import jacketImage from '../assets/images/jacket.jpg';
import bluedress from '../assets/images/bluedress.png';
import saree from '../assets/images/saree.jpg';
import halfsaree from '../assets/images/halfsaree.jpg';

const Products = () => {
  return (
    <div>
      <Navbar />
      <h1>Our Products</h1>
      <div className="product-list">
        {/* You can map over an array of products here */}
        <ProductCard image={shirtImage} name="Stylish Shirt" price="149.99" />
        <ProductCard image={jeansImage} name="Trendy Jeans" price="168.99" />
        <ProductCard image={jacketImage} name="Leather Jacket" price="190.99" />
        <ProductCard image={bluedress} name="Gown" price="150.89" />
        <ProductCard image={saree} name="Saree" price="199.99" />
        <ProductCard image={halfsaree} name="Half Saree" price="250.26" />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
