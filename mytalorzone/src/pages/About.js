// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';  // Assuming Navbar component
import Footer from '../components/Footer';  // Assuming Footer component
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About Mytalorzone By Sahiba</h1>
        <p>
          Welcome to Mytalorzone By Sahiba, where fashion meets comfort. We specialize in
          creating unique, stylish, and high-quality clothing for all occasions. Our goal is to
          provide our customers with the best shopping experience, offering a wide range of
          fashionable apparel.
        </p>
        <p>
          At Mytalorzone, we believe that fashion is an expression of personality. Our designs
          are carefully crafted with attention to detail, and we ensure that each piece stands out
          in both style and comfort.
        </p>
        <p>
          Thank you for choosing us as your fashion destination. Explore our collection and find
          your perfect fit!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
