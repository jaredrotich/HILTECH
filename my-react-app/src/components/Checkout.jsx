import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const handlePayment = () => {
    alert("Payment Successful! 🎉 Thank you for your purchase.");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No items to checkout 😔</h2>
        <Link to="/">Back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout Page</h2>
      <button onClick={handlePayment} className="pay-btn">
        Pay Now
      </button>
    </div>
  );
}
