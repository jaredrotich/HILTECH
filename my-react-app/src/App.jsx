import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Checkout from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
