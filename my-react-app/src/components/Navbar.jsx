import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useCart(); // tumia cart data

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;