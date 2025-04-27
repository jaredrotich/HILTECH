import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ Children }) => {
 const [cart, setCart] = useState([]);

 function addToCart(product) {
   setCartItems(prevItems => {
     const existingItem = prevItems.find(item => item.id === product.id);
     if (existingItem) {
       return prevItems.map(item =>
         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
       );
     } else {
       return [...prevItems, { ...product, quantity: 1 }];
     }
   });
 }

 function removeFromCart(id) {
   setCartItems(prevItems => prevItems.filter(item => item.id !== id));
 }

 function increaseQuantity(id) {
   setCartItems(prevItems =>
     prevItems.map(item =>
       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
     )
   );
 }

 function decreaseQuantity(id) {
   setCartItems(prevItems =>
     prevItems
       .map(item =>
         item.id === id ? { ...item, quantity: item.quantity - 1 } : item
       )
       .filter(item => item.quantity > 0)
   );
 }

 function clearCart() {
   setCartItems([]);
 }

 return (
   <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
     {children}
   </CartContext.Provider>
 );
}
