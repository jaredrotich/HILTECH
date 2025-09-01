import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageProducts.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Failed to load products", err));
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Delete this product?')) return;
    axios.delete(`/api/products/${id}`)
      .then(() => setProducts(products.filter(p => p.id !== id)));
  };

  return (
    <div className="manage-products">
      <h2> Manage Products</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>In Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td><img src={p.image} alt={p.name} /></td>
              <td>{p.product_id}</td>
              <td>{p.name}</td>
              <td className="desc">{p.description}</td>
              <td>Ksh {Number(p.price).toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>{p.stock > 0 ? '✅' : '❌'}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => window.location.href = `/admin/edit-product/${p.id}`}>✏️ Edit</button>
                <button onClick={() => handleDelete(p.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
