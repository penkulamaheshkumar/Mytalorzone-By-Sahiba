import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Mytalorzone By Sahiba</h1>
        <p>Explore the latest trends in fashion and more.</p>
        <a href="/products" className="btn">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;
