export function ProductsIndex ({products}) { 
  return ( 
    <div>
      <h1>All Products!</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Name: {product.name}</h2>
          <h2>Price: {product.price}</h2>
          <img src={product.images[0].image_url} />
        </div>
      ))}
    </div>
  )
}

