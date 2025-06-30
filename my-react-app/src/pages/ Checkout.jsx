import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const countiesWithConstituencies = {
  Nairobi: [
    "Westlands", "Dagoretti North", "Dagoretti South", "Langata", "Kibra", "Roysambu", "Kasarani",
    "Ruaraka", "Embakasi North", "Embakasi Central", "Embakasi East", "Embakasi West",
    "Embakasi South", "Starehe", "Mathare"
  ],
  Kiambu: [
    "Gatundu South", "Gatundu North", "Juja", "Thika Town", "Ruiru", "Githunguri", "Kiambu",
    "Kabete", "Kikuyu", "Limuru", "Lari"
  ],
  Nakuru: [
    "Naivasha", "Gilgil", "Subukia", "Rongai", "Bahati", "Nakuru Town West", "Nakuru Town East",
    "Kuresoi North", "Kuresoi South", "Molo", "Njoro"
  ],
  Mombasa: [
    "Changamwe", "Jomvu", "Kisauni", "Nyali", "Likoni", "Mvita"
  ],
  Kisumu: [
    "Kisumu East", "Kisumu West", "Kisumu Central", "Seme", "Nyando", "Muhoroni", "Nyakach"
  ]
};

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    county: '',
    constituency: '',
    region: '',
    info: '',
  });

  const [constituencies, setConstituencies] = useState([]);

  useEffect(() => {
    if (formData.county && countiesWithConstituencies[formData.county]) {
      setConstituencies(countiesWithConstituencies[formData.county]);
    } else {
      setConstituencies([]);
    }
  }, [formData.county]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("🧾 ORDER DETAILS:", formData);
    console.log("🛒 CART:", cart);
    clearCart();
    navigate('/thank-you');
  };

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Delivery Details</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

        <select name="county" onChange={handleChange} required>
          <option value="">Select County</option>
          {Object.keys(countiesWithConstituencies).map(county => (
            <option key={county} value={county}>{county}</option>
          ))}
        </select>

        <select name="constituency" onChange={handleChange} required>
          <option value="">Select Constituency</option>
          {constituencies.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <input type="text" name="region" placeholder="Specific Area/Region" onChange={handleChange} required />
        <textarea name="info" rows="3" placeholder="Additional Location Info (Optional)" onChange={handleChange}></textarea>

        <button type="submit" className="submit-btn">Submit Order</button>
      </form>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} x{item.quantity} - Ksh {item.price.toLocaleString()}
                </li>
              ))}
            </ul>
            <h4>Total: Ksh {getTotalPrice().toLocaleString()}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
