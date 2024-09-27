export function ProductsIndex({ products, onShow }) {
  return (
    <div>
      <h4>All Products!</h4>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Name: {product.name}</h2>
          <h2>Price: {product.price}</h2>
          {product.images && product.images.length > 0 && ( 
          <img 
            className='images'
            src={product.images[0].image_url}
            alt={product.name}
          /> 
          )}
          <button onClick={() => onShow(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
