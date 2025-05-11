import React from "react";
import ReactDom from "react-router-dom";
import App from "./App";
import { CartProvider } from './context/CartContext.jsx';
import "./App.css"


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);