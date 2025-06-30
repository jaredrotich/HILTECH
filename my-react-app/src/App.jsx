import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AllProducts from './pages/AllProducts';
import ThankYou from './pages/ThankYou';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/products" element={<AllProducts searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />

    </>
  );
};

export default App;
