// src/components/Cart.js
import React, { useContext, useState, useRef, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();

  const toggleCart = () => setIsOpen(!isOpen);

  const closeCartOnOutsideClick = (e) => {
    if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeCartOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeCartOnOutsideClick);
  }, [isOpen]);

  return (
    <div className="relative" ref={cartRef}>
      <button
        onClick={toggleCart}
        className="relative p-2 rounded-full hover:bg-gray-200 transition"
        aria-label="Cart"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border shadow-lg z-50 p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm">Cart is empty</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-2">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Ksh {item.price.toLocaleString()}</p>
                    </div>
                    <button
                      className="text-red-500 text-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold">Total: Ksh {getTotalPrice().toLocaleString()}</span>
                <Link
                  to="/checkout"
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
