import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from './Modal';
import { ProductShowPage } from './ProductShowPage';
import axios from 'axios';
import './ProductsIndexPage.css'

export function ProductsIndexPage() {
  const products = useLoaderData();
  const [productVisible, setProductVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [searchFilter, setSearchFilter] = useState("");



  const onShow = (product) => {
    setProductVisible(true);
    setCurrentProduct(product);
  };

  const onPageClose = () => {
    setProductVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    try {
      const response = await axios.post('http://localhost:3000/carted_products.json', params);
      console.log(response.data);
      setConfirmationMessage('Item added to cart!');
      setShowConfirmation(true);
      event.target.reset();
    } catch (error) {
      console.error('Error adding to cart:', error);
      setConfirmationMessage('Failed to add item to cart.');
      setShowConfirmation(true);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <p className='searchText'> Search: <input className='search' type='text' value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}></input></p>
        {products.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())).map((product) => (
          <div className="col-md-4" key={product.id} style={{ marginBottom: '1rem' }}>
            <div className="card h-100"> {/* Set height to 100% */}
              <div className="card-body d-flex flex-column"> {/* Flex column for vertical alignment */}
                <h5 className="card-title">{product.name}</h5>
                <h5 className="card-title">${product.price}</h5>
                {product.images[0] && (
                  <img 
                    src={product.images[0].image_url}
                    alt={product.name}
                    className="card-img-top"
                  />
                )}
                <div className="mt-auto d-flex justify-content-center">
                  <button className='btn btn-primary' onClick={() => onShow(product)}>More Info</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={productVisible} onClose={onPageClose}>
        <ProductShowPage product={currentProduct} />
        <form onSubmit={handleSubmit}>
          <input type='hidden' name='product_id' value={currentProduct.id} required />
          <div>
            Quantity: <input name='quantity' type='number' min="1" required />
          </div>
          <input type='hidden' name='status' value='carted' />
          <button type='submit'>Add to Cart</button>
        </form>
      </Modal>

      {showConfirmation && (
        <div className={`modal fade show`} style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Added to Cart</h5>
              </div>
              <div className="modal-body">
                <p>{confirmationMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
