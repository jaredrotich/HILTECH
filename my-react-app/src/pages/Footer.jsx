import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaCcVisa, FaMoneyBillWave } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">

        
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@hiltechdigital.co.ke">info@hiltechdigital.co.ke</a></p>
          <p>Phone: 0723467198 | 07</p>
          <p>Projector Spot: </p>
          <p>WhatsApp: 0723467198</p>
          <p>Nairobi, </p>
        </div>

        <div className="footer__section">
          <h3>Opening Hours</h3>
          <p>Weekdays: 8:30 AM - 7:00 PM</p>
          <p>Saturdays: 9:00 AM - 7:00 PM</p>
          <p>Public Holidays: 9:00 AM - 3:30 PM</p>
          <p><strong>Closed on Sundays</strong></p>
        </div>

     
        <div className="footer__section">
          <h3>Popular Links</h3>
          <ul>
            <li><Link to="/products?category=laptops">Laptops</Link></li>
            <li><Link to="/products?category=desktops">Desktops</Link></li>
            <li><Link to="/products?category=iphones">iPhones</Link></li>
            <li><Link to="/products?category=macbooks">MacBooks</Link></li>
            <li><Link to="/products?category=smartphones">Smartphones</Link></li>
            <li><Link to="/products?category=office">Office Electronics</Link></li>
          </ul>
        </div>

      
        <div className="footer__section">
          <h3>Payment Options</h3>
          <p><FaCcVisa /> Visa</p>
          <p><FaMoneyBillWave /> Cash</p>
          <p>Paybill: [Insert Your Paybill]</p>

          <div className="footer__social">
            <a href="https://wa.me/254723467198" target="_blank" rel="noreferrer">
              <FaWhatsapp className="footer__icon" />
            </a>
            <a href="https://facebook.com/Hiltech" target="_blank" rel="noreferrer">
              <FaFacebook className="footer__icon" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer__bottom">© {new Date().getFullYear()} Hiltech Digital. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
