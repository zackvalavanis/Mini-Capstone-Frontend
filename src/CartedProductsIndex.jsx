import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'


export function CartedProductsIndex () { 
  const carted_products = useLoaderData();

  const handleSubmit = (event) => { 
    event.preventDefault();
    axios.post('http://localhost:3000/orders.json').then((response) => { 
      console.log(response.data);
    })
  }


// I will need to implement search by name rather than id.. I could do like if name = blah return product id.. 


  return (
      <div>
        <h1>Your Cart</h1>
        {carted_products.map((carted_product) => (
          <div className='carted-product' key={carted_product.id}>
            <li>
              {carted_product.product.name}: Quantity: {carted_product.quantity} Price: {carted_product.product.price} 
              <img src={carted_product.images[0].image_url} />
            </li>
          </div>
        ))}
        <button type='button' onClick={handleSubmit}>Order</button>
      </div>
  )
}