import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDom from "react-dom/client";
import App from "./App";
import { CartProvider } from './context/CartContext.jsx';
import "./App.css";

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
