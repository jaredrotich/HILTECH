import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleConfirm = async () => {
  const orderData = {
    items: cartItems.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    totalAmount,
    date: new Date().toISOString(),
  };

  try {
    const response = await fetch('http://localhost:4000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      clearCart(); // optional
      navigate('/order-confirmation');
    } else {
      alert('Order failed. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting order:', error);
    alert('Network error. Try again later.');
  }
};
