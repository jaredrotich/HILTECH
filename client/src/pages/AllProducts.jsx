import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './AllProducts.css';

const AllProducts = ({ searchQuery, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAppleDropdown, setShowAppleDropdown] = useState(false);

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

        const customCategories = [
          'All',
          'Apple Store',
          'Audio Devices',
          'Desktops',
          'Networking',
          'Gaming Essentials',
          ...uniqueCategories,
        ];

        setCategories(customCategories);

        if (urlCategory && customCategories.includes(urlCategory)) {
          setSelectedCategory(urlCategory);
        }
      });
  }, [urlCategory]);

  const capitalizeCategory = (cat) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const handleCategoryClick = (category) => {
    if (category === 'Apple Store') {
      setShowAppleDropdown(!showAppleDropdown);
      return;
    }
    setSelectedCategory(category);
    navigate(category === 'All' ? '/products' : `/products?category=${category}`);
  };

  const handleAppleSubCategory = (sub) => {
    setSelectedCategory(sub);
    navigate(`/products?category=${sub}`);
    setShowAppleDropdown(false);
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
            <React.Fragment key={cat}>
              <li
                className={cat === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </li>
              {cat === 'Apple Store' && showAppleDropdown && (
                <ul className="dropdown">
                  <li onClick={() => handleAppleSubCategory('iPhone')}>iPhone</li>
                  <li onClick={() => handleAppleSubCategory('MacBook')}>MacBook</li>
                  <li onClick={() => handleAppleSubCategory('Apple Watch')}>Apple Watch</li>
                  <li onClick={() => handleAppleSubCategory('iPad')}>iPad</li>
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </aside>

      <section className="product-grid">
        {filtered.length > 0 ? (
          <div className="product-grid-wrapper">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </div>
  );
};

export default AllProducts;
