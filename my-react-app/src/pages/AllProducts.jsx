import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './AllProducts.css';

const AllProducts = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const urlCategory = query.get("category");

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        
        const uniqueCategories = Array.from(
          new Set(data.map(p => capitalizeCategory(p.category)))
        );

        setCategories(['All', ...uniqueCategories]);

      
        if (urlCategory && uniqueCategories.includes(urlCategory)) {
          setSelectedCategory(urlCategory);
        }
      });
  }, [urlCategory]);

  const capitalizeCategory = (cat) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/products?category=${category}`);
    }
  };

  const filtered = products.filter((product) => {
    const productCategory = capitalizeCategory(product.category);
    const matchesCategory = selectedCategory === 'All' || productCategory === selectedCategory;
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="all-products">
      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <section className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </div>
  );
};

export default AllProducts;
