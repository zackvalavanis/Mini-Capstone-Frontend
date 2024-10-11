import { useLoaderData } from 'react-router-dom';

export function OrdersIndex() { 
  const orders = useLoaderData();
 
  return (
    <div>
      <h1>All Orders</h1>
      {(!orders || orders.length === 0) ? (
        <div>No orders available.</div>
      ) : (
        <>
          {orders.map(({ id, subtotal, tax, total, carted_products }) => (
            <div key={id}>
              <h2>Order ID: {id}</h2>
              <p>Subtotal: {subtotal}</p>
              <p>Tax: {tax}</p>
              <p>Total: {total}</p>
              <h3>Carted Products:</h3>
              {carted_products.length > 0 ? (
                carted_products.map((cp) => (
                  <div key={cp.id}>
                    <p>{cp.product_name} - Quantity: {cp.quantity} - Price: {cp.product_price}</p>
                  </div>
                ))
              ) : (
                <div>No products in this order.</div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
