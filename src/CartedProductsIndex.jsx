import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';




export function CartedProductsIndex () { 
  const carted_products = useLoaderData();


  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then((response) => { 
      console.log(response.data);
      event.target.reset();
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
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Product: <input name='product_id' type='text' required/> 
          </div>
          <div>
            Quantity: <input name='quantity' type='text' required />
          </div>
          <div>
           Status: <input defaultValue='carted' />
          </div>
          <button type='submit'>Add Product to Cart</button>
        </form>
      </div>
  )
}