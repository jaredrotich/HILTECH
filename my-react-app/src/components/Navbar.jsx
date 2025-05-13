


// import React, { useState } from 'react';
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
// import "./Navbar.css";

// const Navbar = () => {
//   const [showAccountDropdown, setShowAccountDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowAccountDropdown(!showAccountDropdown);
//   };

//   return (
//     <nav className="navbar">
    
//       <div className="navbar__logo">
//         <Link to="/">HILTECH</Link>
//       </div>

//       {/* Search bar */}
//       <div className="navbar__search">
//         <FaSearch className="search-icon" />
//         <input type="text" placeholder="Search products..." />
//         <button className="search-btn">Search</button>
//       </div>

//       {/* Navigation Links */}
//       <ul className="navbar__links">
//         <li><NavLink to="/" className="nav-link">Home</NavLink></li>
//         <li><NavLink to="/about" className="nav-link">About</NavLink></li>
//         <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
//         <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
//       </ul>

//       {/* Icons + Account */}
//       <div className="navbar__icons">
//         <div className="icon-wrapper">
//           <FaHeart />
//           <span className="icon-badge">0</span>
//         </div>
//         <div className="icon-wrapper">
//           <FaShoppingCart />
//           <span className="icon-badge">0</span>
//         </div>
//         <div className="account-wrapper" onClick={toggleDropdown}>
//           <FaUserCircle className="user-icon" />
//           <span>Account</span>
//           {showAccountDropdown && (
//             <div className="account-dropdown">
//               <Link to="/signup">Sign up</Link>
//               <Link to="/signin">Sign in</Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
    <nav className='navbar'>
      <div className='navbar__logo'>HILTECH</div>

      <ul className='navbar__links'>
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>

      <form onSubmit={handleSearchSubmit} className='navbar__search'>
        <FaSearch />
        <input
          type="text"
          placeholder="Search products, brands, and categories"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </form>

      <div className='navbar__icons'>
        <FaShoppingCart className='icon' />
        <FaHeart className='icon' />
        <div className='account-wrapper' onClick={toggleDropdown}>
          <FaUserCircle className='icon' />
          <span>Account</span>
          {showAccountDropdown && (
            <div className='account-dropdown'>
              <NavLink to="/signup">Sign up</NavLink>
              <NavLink to="/signin">Sign in</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
