import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from './pages/HomePage';
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
