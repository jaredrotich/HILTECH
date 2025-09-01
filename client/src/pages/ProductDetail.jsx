import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => String(p.id) === id);
        if (!foundProduct) {
          setProduct(null);
          return;
        }

        setProduct(foundProduct);

        // Fetch related products from already loaded data
        const relatedProducts = data.filter(
          p => p.category === foundProduct.category && p.id !== foundProduct.id
        );
        setRelated(relatedProducts.slice(0, 4));
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        setProduct(null);
      });
  }, [id]);

  if (product === null) return <p>Product not found or failed to load.</p>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/products')} className="back-btn">
        ← Back to Products
      </button>

      <div className="product-detail__wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail__image"
        />
        <div className="product-detail__info">
          <h2>{product.name}</h2>
          <p className="desc">{product.description}</p>
          <p className="price">Ksh {product.price.toLocaleString()}</p>
          <button
            onClick={() => {
              if (product && onAddToCart) {
                console.log("✅ Adding to cart:", product);
                onAddToCart(product);
              } else {
                console.warn("🚫 Product or onAddToCart is missing");
              }
            }}
          >
            Add to Cart
          </button>
        </div>

      </div>

      {related.length > 0 && (
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="related-grid">
            {related.map((item) => (
              <div
                key={item.id}
                className="related-card"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
