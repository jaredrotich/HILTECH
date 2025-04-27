import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] =useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
            const allCategories = [...new Set(data.map(item => item.category))];
            setCategories(allCategories);
          })
          .catch((err) => console.error('Failed to fetch products', err));
      }, []);
    
      const handleSearch = (query) => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      };
    
      const handleCategoryFilter = (category) => {
        if (category === "All") {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter((product) => product.category === category);
          setFilteredProducts(filtered);
        }
      };

    return (
        <div className="home-container">
            <h1>Our Products</h1>
            <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onFilter={handleCategoryFilter} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </div>
    );
};

export default Home;