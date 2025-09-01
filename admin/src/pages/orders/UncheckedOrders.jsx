import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css';

const UncheckedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?status=unchecked')
      .then(res => setOrders(res.data))
      .catch(err => console.error("Error fetching unchecked orders:", err));
  }, []);

  return (
    <div className="orders-page">
      <h2>🕵️‍♂️ Unchecked Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.order_number || order.id}</td>
              <td>{order.customer_name}</td>
              <td>{order.status}</td>
              <td>Ksh {Number(order.total).toLocaleString()}</td>
              <td>{order.created_at?.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UncheckedOrders;
