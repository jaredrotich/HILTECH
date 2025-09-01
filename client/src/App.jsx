import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Cart from './components/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ReceiptModal from './pages/ReceiptModal'; 
import AllProducts from './pages/AllProducts';
import ThankYou from './pages/ThankYou';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Footer from './pages/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log("Cart Updated:", [...cartItems, product]);
  };

  const handleOrderPlaced = (orderData) => {
    setOrderDetails(orderData);
    setShowReceipt(true);
  };

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route
          path="/products"
          element={<AllProducts searchQuery={searchQuery} onAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/products/:id"
          element={<ProductDetailWrapper onAddToCart={handleAddToCart} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} onOrderPlaced={handleOrderPlaced} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />

      {showReceipt && (
        <ReceiptModal
          order={orderDetails}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </>
  );
};

const ProductDetailWrapper = ({ onAddToCart }) => {
  const { id } = useParams();
  return <ProductDetail id={id} onAddToCart={onAddToCart} />;
};

export default App;
