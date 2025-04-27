import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className='navbar'>
         <div className='logo'>
           <Link to="/">MyShop</Link>
         </div>
         <div className='cart'>
          🛒 Cart ({cart.length})
         </div>
        </nav>
    );
};

export default Navbar;