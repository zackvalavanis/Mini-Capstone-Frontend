import { useLoaderData } from 'react-router-dom';

export function OrdersIndex () { 
  const orders = useLoaderData();
 
  return (
    <div>
      <h1>All Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h1>Order Number: {order.id}</h1>
          {order.products.map((product) => (
            <div key={product.id}>
              <p>{product.name}.</p>  
              {order.carted_products.map((carted_product) => { 
                <div key={carted_product.id}>
                  <h1>{carted_product.quantity}</h1>
                </div>
              })}
              <p> Quantity: {order.quantity}</p>
            </div>
          ))}
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