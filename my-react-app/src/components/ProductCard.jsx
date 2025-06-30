import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, image, description, discount, category } = product;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-card__image"
        onClick={handleViewDetails}
        style={{ cursor: 'pointer' }}
      />
      <div className="product-card__details">
        <h3
          className="product-card__name"
          onClick={handleViewDetails}
          style={{ cursor: 'pointer' }}
        >
          {name}
        </h3>
        <p className="product-card__description">
          {description.slice(0, 100)}...
        </p>
        <p className="product-card__price">Ksh {price.toLocaleString()}</p>
        <div className="product-card__meta">
          <span className="product-card__discount">{discount}</span>
          <span className="product-card__category">{category}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="product-card__button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
