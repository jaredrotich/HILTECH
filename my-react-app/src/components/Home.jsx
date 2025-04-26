import React, { useEffect, useState } from 'react';
import productCard from './ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error('Failed to fetch products', err));
    }, []);

    return (
        <div className="home-container">
            <h1>Our Products</h1>
            <div className='product-grid'>
                {products.map((product) => (
                    <productCard key={product.id} product={product} />
                ))}

            </div>
        </div>
    );
};

export default Home;