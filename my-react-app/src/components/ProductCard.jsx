import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
    const { name, price, image, description, discount, category } = product;

    return (
        <div className='product-card'>
            <img src={image} alt={name} className='product-card__image' />
            <div className='product-card__details'>
                <h3>{name}</h3>
                <p>{description.slice(0, 80)}...</p>
                <p className="product-card__price">Ksh {price.toLocaleString()}</p>
                <span className="product-card__discount">{discount}</span>
                <span className="product-card__category">{category}</span>
                <button
  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Add to Cart
</button>

            </div>
        </div>
    );
};

export default ProductCard;