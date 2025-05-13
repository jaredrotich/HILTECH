
import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Order Confirmed!</h1>
      <p className="mb-4">Thank you for your purchase. A confirmation email has been sent to <strong>yourname@example.com</strong>.</p>
      <p>We’ll process your order and notify you once it ships.</p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
