import { useLoaderData, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import axios from 'axios';

export function CartedProductsIndex() {
  const carted_products = useLoaderData(); // Ensure this is correctly imported
  const navigate = useNavigate();

  const isLoggedIn = () => {
    return localStorage.getItem("jwt") !== null; // Check for JWT presence
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/LoginPage'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleSubmit = () => {
    console.log('handleSubmit');
    axios.post('http://localhost:3000/orders.json')
      .then((response) => {
        console.log(response.data);
        const orderId = response.data.order.id;
        navigate(`/orders/${orderId}`);
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  const navigateToOrdersIndex = (event) => {
    event.preventDefault();
    navigate('/orders');
  };

  // Calculate subtotal, tax, and total
  const calculateTotals = () => {
    const subtotal = carted_products.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
    const tax = subtotal * 0.1; // Assuming a 10% tax rate
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotals();

  const getPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : 'N/A';
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {carted_products.map((carted_product) => (
        <div className='carted-product' key={carted_product.id}>
          <li>
            {carted_product.product.name}: Quantity: {carted_product.quantity} 
            Price: ${getPrice(carted_product.product.price)} 
            <img src={carted_product.images[0].image_url} alt={carted_product.product.name} />
          </li>
        </div>
      ))}
      <div>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h3>Tax: ${tax.toFixed(2)}</h3>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <button type='button' onClick={handleSubmit}>Order</button>
      <button type='button' onClick={navigateToOrdersIndex}>See All Orders</button>
    </div>
  );
}
