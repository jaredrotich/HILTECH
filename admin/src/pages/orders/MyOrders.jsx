import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const adminId = 1;
    axios.get(`/api/orders?admin_id=${adminId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error("Failed to load orders", err));
  }, []);

  return (
    <div className="orders-page">
      <h2> My Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Client</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.client_name}</td>
              <td>{order.total_items}</td>
              <td>Ksh {order.total_price.toLocaleString()}</td>
              <td>{order.status}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
