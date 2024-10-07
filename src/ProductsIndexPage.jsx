import { useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from './Modal'
import { ProductShowPage } from './ProductShowPage'

export function ProductsIndexPage () { 
  const products = useLoaderData();
  const [ productVisible, setProductVisible ] = useState(false);
  const [ currentProduct, setCurrentProduct ] = useState ({});


  const onShow = (product) => { 
    console.log('onPageShow', product);
    setProductVisible(true);
    setCurrentProduct(product);
  };

  const onPageClose = () => { 
    console.log('onPageClose');
    setProductVisible(false);
  }


  return ( 
    <div className="products-container">
      {products.map((product) => (
        <div className="card" key={product.id} style={{ width: '18rem', margin: '1rem' }}>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h5 className='card-title'>${product.price}</h5>
            {product.images[0] && (
              <img 
                src={product.images[0].image_url}
                alt={product.name}
                className="card-img-top"
              />
            )}
            {product.images_with_default.map((image) => (
              <img 
              className='image' 
              key={image.id} 
              src={image.image_url} 
              alt='Product Image' />
            ))}
            <button className='more info' onClick={() => onShow(product)}>More Info</button>
          </div>
        </div>
      ))}
        <div>
        <Modal show={productVisible} onClose={onPageClose}>
          <ProductShowPage product={currentProduct} />
        </Modal>
        </div>
    </div>
  );
}
      {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a> */}
