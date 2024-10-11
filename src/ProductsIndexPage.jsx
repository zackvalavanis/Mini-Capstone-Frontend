import { useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from './Modal'
import { ProductShowPage } from './ProductShowPage'
import axios from 'axios'

export function ProductsIndexPage () { 
  const products = useLoaderData();
  const [ productVisible, setProductVisible ] = useState(false);
  const [ currentProduct, setCurrentProduct ] = useState ({});
  const [ carted_product, setCartedProduct] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation modal
  const [confirmationMessage, setConfirmationMessage] = useState(''); // Message for confirmation modal


  const onShow = (product) => { 
    console.log('onPageShow', product);
    setProductVisible(true);
    setCurrentProduct(product);
  };

  const onPageClose = () => { 
    console.log('onPageClose');
    setProductVisible(false);
  }

  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then((response) => { 
      console.log(response.data);
      setCartedProduct([...carted_product, response.data])
      setConfirmationMessage();
      setShowConfirmation(true); // Show confirmation modal
      event.target.reset();
    })
  }

  return ( 


    
    <div className="products-container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
          {/* <h1>Item</h1> */}
        <div>
          <form onSubmit={handleSubmit}>
          <div>
            <input type='hidden' name='product_id' defaultValue={currentProduct.id} required/> 
          </div>
          <div>
            Quantity: <input name='quantity' type='text' required />
          </div>
          <div>
            <input type='hidden' defaultValue='carted' name='status' />
          </div>
          <button type='submit'>Add to Cart</button>
          </form>
        </div>
        </Modal>
        </div>
        <div className={`modal fade ${showConfirmation ? 'show' : ''}`} style={{ display: showConfirmation ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Added to Cart</h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Close</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}



