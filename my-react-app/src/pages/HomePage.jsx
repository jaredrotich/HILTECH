import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default HomePage;
