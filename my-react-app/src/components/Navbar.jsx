import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>HILTECH</div>
            <ul className='navbar__menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;