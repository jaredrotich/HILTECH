import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1>About Hiltech</h1>
          <p>
            At Hiltech, we merge innovation, quality, and affordability to bring you the best in tech products and services.
            From top-tier electronics to seamless shopping experiences, Hiltech is your one-stop destination for reliable
            and modern solutions.
          </p>

          <h2>Why Choose Hiltech?</h2>
          <ul>
            <li>✅ Verified and Trusted Products</li>
            <li>✅ Fast and Safe Delivery</li>
            <li>✅ Dedicated Customer Support</li>
            <li>✅ Competitive Prices</li>
            <li>✅ Locally rooted with a global mindset</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
