import React from "react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h4 className="font-semibold">{item.name}</h4>
        <p>KES {(item.price * item.quantity).toLocaleString()}</p>
        <div className="flex gap-2 mt-1">
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
