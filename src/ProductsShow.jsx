export function ProductsShow ( {product} ) { 
  return (
      <div>
        <h1>Product Information:</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
  );
}