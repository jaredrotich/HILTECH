// import React, { useEffect, useState } from 'react';
// import ProductCard from '../components/ProductCard';
// import './Home.css';

// const Home = () => {
//     const [Products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/products')
//         .then((res) => res.json())
//         .then((data) => setProducts(data))
//         .catch((err) => console.error('Error fetching products:', err));
//     }, []);

//     return (
//         <div className='home'>
//             <h1 className='home__title'>Featured Products</h1>
//             <div className='home__grid'>
//                 {Products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch products once
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    // Filter products when searchQuery changes
    useEffect(() => {
        if (searchQuery && searchQuery.trim() !== '') {
            const lowerQuery = searchQuery.toLowerCase();
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(lowerQuery) ||
                product.category.toLowerCase().includes(lowerQuery)
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

    return (
        <div className='home'>
            <h1 className='home__title'>Featured Products</h1>
            <div className='home__grid'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found for "{searchQuery}"</p>
                )}
            </div>
        </div>
    );
};

export default Home;
