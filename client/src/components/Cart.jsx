import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState(null);

  const handleCheckoutSubmit = (checkoutData) => {
    const order = {
      customer: checkoutData,
      items: cart,
      total: getTotalPrice(),
    };

    setOrderDetails(order);
    navigate('/thank-you', { state: order });
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: Ksh {item.price.toLocaleString()}</p>
                  <p>Qty: {item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: Ksh {getTotalPrice().toLocaleString()}</h3>
            <button
              className="checkout-btn"
              onClick={() => navigate('/checkout', {
                state: {
                  cart,
                  total: getTotalPrice()
                }
              })}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
