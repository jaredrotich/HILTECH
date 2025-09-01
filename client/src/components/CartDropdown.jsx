import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDropdown.css';

const CartDropdown = ({ onClose }) => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name}</span> - Ksh {item.price.toLocaleString()}
                <button onClick={() => removeFromCart(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> Ksh {getTotalPrice().toLocaleString()}</p>
          <Link to="/cart" onClick={onClose}>Go to Cart</Link>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
