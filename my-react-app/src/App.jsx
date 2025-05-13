import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Checkout from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
    return (
      
        <>
          <Navbar />
          <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </>
    );
};


export default App;