// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';  // Assuming Navbar component
import Footer from '../components/Footer';  // Assuming Footer component
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatusMessage('There was an error sending your message.');
        console.error('Error sending message', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Contact Us</h2>
      <div className="contact-form-container">
        {statusMessage && <p>{statusMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
