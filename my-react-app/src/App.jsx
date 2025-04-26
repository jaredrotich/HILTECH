import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
    </>
  );
};

export default App;