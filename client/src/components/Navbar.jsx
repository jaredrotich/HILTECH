import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      navigate('/');
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
     
      <div className="navbar__logo">
        <NavLink to="/">HILTECH</NavLink>
      </div>

      
      <ul className="navbar__links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>

      </ul>

     
      <form onSubmit={handleSearchSubmit} className="navbar__search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar__icons">
        
        <div className="icon-wrapper">
          <FaHeart />
          <span className="icon-badge">0</span>
        </div>

        
        <NavLink to="/cart" className="icon-wrapper">
          <FaShoppingCart />
          {totalItems > 0 && <span className="icon-badge">{totalItems}</span>}
        </NavLink>

        
        <div className="account-wrapper" onClick={toggleDropdown}>
          <FaUserCircle className="user-icon" />
          <span>Account</span>
          {showAccountDropdown && (
            <div className="account-dropdown">
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/signin">Sign In</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
