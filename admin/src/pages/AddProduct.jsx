import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const [form, setForm] = useState({
    image: '',
    product_id: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    discount: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/products', form)
      .then(() => {
        alert('Product added!');
        setForm({ image: '', product_id: '', name: '', description: '', price: '', stock: '', category: '', discount: '' });
      })
      .catch(err => alert('Error adding product'));
  };

  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <h2> Add New Product</h2>
      <input name="image" placeholder="Image URL" onChange={handleChange} value={form.image} required />
      <input name="product_id" placeholder="Product ID" onChange={handleChange} value={form.product_id} required />
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} value={form.price} required />
      <input name="stock" type="number" placeholder="Stock" onChange={handleChange} value={form.stock} required />
      <input name="category" placeholder="Category" onChange={handleChange} value={form.category} required />
      <input name="discount" type="number" placeholder="Discount (optional)" onChange={handleChange} value={form.discount} />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default AddProduct;
