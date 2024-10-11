import { useLoaderData, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import axios from 'axios'


export function CartedProductsIndex () { 
  const carted_products = useLoaderData();
  const navigate = useNavigate();
  const isLoggedIn = () => {
    return localStorage.getItem("jwt") !== null; // Check for the presence of the JWT
  };
  
  useEffect(() => { 
    if (!isLoggedIn()) { // Call the function here
      navigate('/LoginPage'); // Ensure the correct path is used
    }
  }, [navigate]); // No need to include isLoggedIn here since it’s a function
  

  const handleSubmit = (event) => { 
    event.preventDefault();
    axios.post('http://localhost:3000/orders.json').then((response) => { 
      console.log(response.data);
    })
  }

  const navigateToOrdersIndex = (event) => { 
    event.preventDefault();
    navigate('/orders')
  }

  return (
      <div>
        <h1>Your Cart</h1>
        {isLoggedIn()}
        {carted_products.map((carted_product) => (
          <div className='carted-product' key={carted_product.id}>
            <li>
              {carted_product.product.name}: Quantity: {carted_product.quantity} Price: {carted_product.product.price} 
              <img src={carted_product.images[0].image_url} />
            </li>
          </div>
        ))}
        <button type='button' onClick={handleSubmit}>Order</button>
        <button type='button' onClick={navigateToOrdersIndex}>See All Orders</button>
      </div>
  )
}



// Will need to add here: 
  // add subtotal, tax and total cost somewhere at the bottom so they can see before placing order 
