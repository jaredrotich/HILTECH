import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Categories = () => {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const grouped = data.reduce((acc, p) => {
          acc[p.category] = acc[p.category] || [];
          acc[p.category].push(p);
          return acc;
        }, {});
        setProductsByCategory(grouped);
      });
  }, []);

  return (
    <div className="p-4">
      {Object.entries(productsByCategory).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-xl font-bold mt-6 mb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
