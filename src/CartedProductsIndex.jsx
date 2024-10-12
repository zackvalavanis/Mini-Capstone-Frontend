import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export function CartedProductsIndex() {
  const cartedProducts = useLoaderData() || [];
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate('/loginPage'); // Adjust the route to your login page
    }
  }, [navigate]);

  const purchase = async () => {
    setLoading(true);
    setError(null);
    console.log('Purchasing...');
    
    try {
      const response = await axios.post("http://localhost:3000/orders.json");
      console.log(response.data);
      navigate(`/orders/${response.data.order.id}`);
    } catch (err) {
      console.error('Error during purchase:', err);
      setError('There was an issue processing your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  console.log(cartedProducts); // Log carted products

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Array.isArray(cartedProducts) && cartedProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Array.isArray(cartedProducts) && cartedProducts.map(cp => {
          const price = parseFloat(cp.product.price); // Convert to number
          console.log(cp.product.price, typeof cp.product.price); // Log the price and its type
          return (
            <div key={cp.id}>
              <p>Name: {cp.product.name}</p>
              <p>Price: ${isNaN(price) ? 'N/A' : price.toFixed(2)}</p> 
              <p>Quantity: {cp.quantity}</p>
              <hr />
            </div>
          );
        })
      )}
      <button onClick={purchase} disabled={loading}>
        {loading ? 'Processing...' : 'Purchase'}
      </button>
    </div>
  );
}
