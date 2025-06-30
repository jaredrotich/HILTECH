import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-full max-w-md" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Ksh {product.price.toLocaleString()}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
