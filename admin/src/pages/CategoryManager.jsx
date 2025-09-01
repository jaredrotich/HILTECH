import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryManager.css';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => setCategories(res.data));
  }, []);

  const handleAdd = () => {
    axios.post('/api/categories', { name: newCategory })
      .then(res => setCategories([...categories, res.data]));
    setNewCategory('');
  };

  const handleDelete = id => {
    axios.delete(`/api/categories/${id}`)
      .then(() => setCategories(categories.filter(c => c.id !== id)));
  };

  return (
    <div className="category-manager">
      <h2> Category Manager</h2>
      <input placeholder="New category" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {cat.name} <button onClick={() => handleDelete(cat.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;
