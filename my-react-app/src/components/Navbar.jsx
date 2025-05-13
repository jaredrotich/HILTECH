// import React from 'react';
// import "./Navbar.css";

// const Navbar = () => {
//     return (
//         <nav className='navbar'>
//             <div className='navbar__logo'>HILTECH</div>
//             <ul className='navbar__menu'>
//             <li><a href='/'>Home</a></li>
//                 <li><a href='/'>Products</a></li>
//                 <li><a href='/'>Contact</a></li>
//             </ul>
//         </nav>
//     );
// };


// export default Navbar;

import React from 'react';
import {  NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
          <h2>HILTECH</h2>
          <NavLink
          to="/"
          className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
          to="/about"
          className="nav-link"
          >
            About
          </NavLink>
          <NavLink
          to="/contact"
          className="nav-link"
          >
            Contact
          </NavLink>
          <NavLink
          to="/projects"
          className="nav-link"
          >
            Products
          </NavLink>
        </nav>
    )
}

export default Navbar;