import { useLoaderData } from 'react-router-dom'

export function ProductShowPage ({ product }) { 
  const products = useLoaderData();
  
  return (
    <div>
      <div>
      <h1>{product.name}</h1>
      <p>Inventory: {product.inventory}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      </div>
    </div>
  )
}