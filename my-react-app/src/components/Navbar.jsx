import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <Nav className='navbar'>
            <div className='navbar__logo'>HILTECH</div>
            <ul className='navbar__menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </Nav>
    );
};


export default Navbar;