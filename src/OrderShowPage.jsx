import { useLoaderData } from 'react-router-dom';

export function OrderShowPage () { 
  const orders = useLoaderData();
  return (
    <div>
      <h1>Order Completed</h1>
      {orders[0].carted_products.map((cp) => (
        <div key={cp.id}>
          <h1>{cp.product_name}</h1>




        </div>
  
      ))}




    </div>

  )
}