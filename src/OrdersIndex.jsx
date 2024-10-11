import { useLoaderData } from 'react-router-dom';

export function OrdersIndex () { 
  const orders = useLoaderData();
 
  return (
    <div>
      <h1>All Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h1>Order Number: {order.id}</h1>
          <p>{order.products[0] && order.products[0].name}.</p>  
          <p>Subtotal: {order.subtotal}</p>
          <p>Sales Tax: {order.tax}</p>
          <p>Total: {order.total}</p>
        </div>
      ))}

      
    </div>
  )
}


// "subtotal":
// "tax"
// "total":