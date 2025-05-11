import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Checkout from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => {
    return (
        <>
          <Navbar />
          <Home />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </>
    );
};


export default App;