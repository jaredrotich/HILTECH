
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate();
const handleConfirm = () => {
    navigate('/order-confirmation');
}
const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. <Link to="/" className="text-blue-600 underline">Go shopping</Link></p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-300 mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Ksh {item.price.toLocaleString()}</p>
                </div>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </li>
            ))}
          </ul>

          <div className="text-right">
            <p className="text-xl font-bold mb-2">Total: Ksh {getTotalPrice().toLocaleString()}</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
