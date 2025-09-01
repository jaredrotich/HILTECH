import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EditProduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setForm(res.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.patch(`/api/products/${id}`, form)
      .then(() => alert("Product updated!"))
      .catch(() => alert("Update failed!"));
  };

  return (
    <form className="edit-product" onSubmit={handleSubmit}>
      <h2> Edit Product</h2>
      <input name="image" value={form.image || ''} onChange={handleChange} />
      <input name="product_id" value={form.product_id || ''} onChange={handleChange} />
      <input name="name" value={form.name || ''} onChange={handleChange} />
      <textarea name="description" value={form.description || ''} onChange={handleChange} />
      <input name="price" type="number" value={form.price || ''} onChange={handleChange} />
      <input name="stock" type="number" value={form.stock || ''} onChange={handleChange} />
      <input name="category" value={form.category || ''} onChange={handleChange} />
      <input name="discount" type="number" value={form.discount || ''} onChange={handleChange} />
      <button>Update Product</button>
    </form>
  );
};

export default EditProduct;
