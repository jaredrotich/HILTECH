import React from 'react';
import './Contact.css';

const Contact = () => {
  const whatsappLink1 = "https://wa.me/254723467198";
  const whatsappLink2 = "https://wa.me/254727659614";

  return (
    <div className="contact-wrapper">
     
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <p>Need help? Reach us through any of the channels below.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>


      <div className="contact-info-section">
        <h3>Reach Us Directly</h3>
        <p>📞 Call: <strong>0723 467198</strong> or <strong>0727 659614</strong></p>
        <p>💬 WhatsApp Us:</p>
        <ul>
          <li><a href={whatsappLink1} target="_blank" rel="noopener noreferrer">Chat 0723 467198</a></li>
          <li><a href={whatsappLink2} target="_blank" rel="noopener noreferrer">Chat 0727 659614</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
