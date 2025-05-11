import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className='home'>
            <h1 className='home__title'>Featured Products</h1>
            <div className='home__grid'>
                {Products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;