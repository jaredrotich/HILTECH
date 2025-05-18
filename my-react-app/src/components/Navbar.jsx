import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <NavLink to="/">HILTECH</NavLink>
      </div>

      {/* Links */}
      <ul className="navbar__links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>

      {/* Search */}
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

      {/* Icons */}
      <div className="navbar__icons">
        <div className="icon-wrapper">
          <FaHeart />
          <span className="icon-badge">0</span>
        </div>
        <div className="icon-wrapper">
          <FaShoppingCart />
          <span className="icon-badge">0</span>
        </div>

        {/* Account Dropdown */}
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
