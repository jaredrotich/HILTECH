import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/')
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error('Failed to fetch product details', err));
    }, [id]);

    if (!product) return <div>Loading...</div>;
     
    return (
        <div className="product-details">
        <img src={product.image} alt={product.name} />
        <div className="info">
          <h2>{product.name}</h2>
          <p>Price: Ksh {product.price.toLocaleString()}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
    );
};

export default ProductDetails;