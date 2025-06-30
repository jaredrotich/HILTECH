import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>Need help? Reach us through any of the channels below.</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message..." rows="5" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
