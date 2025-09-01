import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PendingOrders.css';

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?status=pending')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Failed to fetch pending orders:', err));
  }, []);

  return (
    <div className="pending-orders">
      <h2>Pending Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Client</th>
            <th>Product</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.client_name}</td>
              <td>{order.product_name}</td>
              <td>Ksh {Number(order.total).toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
