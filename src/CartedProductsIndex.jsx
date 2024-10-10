import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




export function CartedProductsIndex () { 
  const carted_products = useLoaderData();

  return (
      <div>
        <h1>Your Cart</h1>
        {carted_products.map((carted_product) => (
          <div className='carted-product' key={carted_product.id}>
            <li>
              {carted_product.product.name}: Quantity: {carted_product.quantity} Price: {carted_product.product.price} 
              <img src={carted_product.images[0].image_url} />
            </li>
            <li>
            
            </li>
          </div>
        ))}
      </div>
  )
}