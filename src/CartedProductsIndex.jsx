import { useLoaderData } from 'react-router-dom';




export function CartedProductsIndex () { 
  const carted_products = useLoaderData();





  return (
    <div>
      <h1>Your Cart</h1>
      {carted_products.map((carted_product) => { 
        console.log(carted_product);

      })}











    </div>

  )
}