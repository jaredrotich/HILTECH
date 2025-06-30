import React from 'react';
import { useLocation } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const order = location.state;

  if (!order) return <p>No order details found.</p>;

  const { customer, items, total } = order;

  return (
    <div className="thank-you-page">
      <h2>🎉 Thank You for Your Order!</h2>

      <section className="customer-details">
        <h3>Customer Info</h3>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>County:</strong> {customer.county}</p>
        <p><strong>Constituency:</strong> {customer.constituency}</p>
        <p><strong>Region:</strong> {customer.region}</p>
        <p><strong>Additional Info:</strong> {customer.info || 'N/A'}</p>
      </section>

      <section className="order-summary">
        <h3>Order Summary</h3>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> – Qty: {item.quantity} – Ksh {item.price.toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items were found in the order.</p>
        )}
        <h4>Total Paid: <span>Ksh {total.toLocaleString()}</span></h4>
      </section>
    </div>
  );
};

export default ThankYou;
