import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function ProductsIndexPage () { 
  const products = useLoaderData();
  return ( 
  <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      {products.map((product) => (
          <div key={product.id}>
            <h5 className="card-title">{product.name}</h5>
            <h5 className='card-title'>{product.price}</h5>
            {product.images[0] && (
              <img 
              src={product.images[0].image_url}
              alt={product.name}/>
            )}
          </div>
      ))}
      {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a> */}
    </div>
  </div>
    
  )
}
    // <div>
    //   <h4>All Products!</h4>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <h2>Name: {product.name}</h2>
    //       <h2>Price: {product.price}</h2>
    //       {/* Check if images exist before trying to render */}
    //       {product.images[0] && <img src={product.images[0].image_url} alt={product.name} />}
          
    //       {/* Render images_with_default with the correct image reference */}
    //       {product.images_with_default.map((image) => (
    //         <img className='image' key={image.id} src={image.image_url} alt="Product Image" />
    //       ))}
    //       <button className='moreInfo' onClick={() => onShow(product)}>More Info</button>
    //     </div>
    //   ))}
    // </div>