import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import './Home.css';
import white from '../assets/images/white.jpg';
import saree from '../assets/images/silk saree.jpg';
import dhoti from '../assets/images/dhoti.webp';
import kurta from '../assets/images/kurta.jpg';
import long from '../assets/images/long dress.webp';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
        <ProductCard image={white} name="Traditional dress" price="800.95" />
        <ProductCard image={saree} name="Silk Saree" price="1000.0" />
        <ProductCard image={dhoti} name="Dhoti" price="190.0" />
        <ProductCard image={kurta} name="Kurta" price="100.90" />
        <ProductCard image={long} name="long dress" price="170.0" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
