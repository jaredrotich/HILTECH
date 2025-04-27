import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>ksh {product.price.toLocaleString()}</p>
            <div className="buttons">
            <Link to={'/product/&{product.id}'}>
              <button>View Details</button>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;