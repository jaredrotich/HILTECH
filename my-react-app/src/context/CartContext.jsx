import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ Children }) => {
 const [cart, setCart] = useState([]);

 const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, products]);
 };

 return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {Children}
    </CartContext.Provider>
 );
};