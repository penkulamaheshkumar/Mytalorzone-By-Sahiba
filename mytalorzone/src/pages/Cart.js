// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';  // Assuming Navbar component
import Footer from '../components/Footer';  // Assuming Footer component
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart items from the backend (assuming cart API exists)
  useEffect(() => {
    axios.get('http://localhost:5000/api/cart') // Backend cart endpoint
      .then(response => {
        setCartItems(response.data.cartItems);
        calculateTotalPrice(response.data.cartItems);
      })
      .catch(error => {
        console.error('Error fetching cart items', error);
      });
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  // Handle item quantity update (for example, quantity increase)
  const updateQuantity = (itemId, quantity) => {
    axios.put(`http://localhost:5000/api/cart/${itemId}`, { quantity })
      .then(response => {
        setCartItems(response.data.cartItems);
        calculateTotalPrice(response.data.cartItems);
      })
      .catch(error => {
        console.error('Error updating cart item', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Your Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: 
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Total Price: ${totalPrice}</h3>
        <button>Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
