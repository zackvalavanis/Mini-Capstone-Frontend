import { useLoaderData } from 'react-router-dom';

export function OrderShowPage() {
  const order = useLoaderData(); // Get the single order object

  console.log("Order from useLoaderData:", order); // Check the structure here

  // Check if order is defined
  if (!order) {
    return <p>No order found.</p>;
  }

  const cartedProducts = order.carted_products || [];
  if (cartedProducts.length === 0) {
    return <p>No products found in this order.</p>;
  }

  const { subtotal, tax, total } = order;

  return (
    <div>
      <h1>Order Completed</h1>
      {cartedProducts.map((cp) => (
        <div key={cp.id}>
          <p>
            {cp.product_name} Quantity: {cp.quantity} -- Price: ${parseFloat(cp.product_price).toFixed(2)}
          </p>
        </div>
      ))}
      <div>
        <h3>Order Summary</h3>
        <p>Subtotal: ${parseFloat(subtotal).toFixed(2)}</p>
        <p>Tax: ${parseFloat(tax).toFixed(2)}</p>
        <p>Total: ${parseFloat(total).toFixed(2)}</p>
      </div>
    </div>
  );
}
