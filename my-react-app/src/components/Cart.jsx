import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/">Go back shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: Ksh {item.price.toLocaleString()}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: Ksh {total.toLocaleString()}</h3>
        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
      </div>
    </div>
  );
}
