import { ProductsIndex } from './ProductsIndex';
import { useState, useEffect } from 'react';
import { ProductsNew } from './ProductsNew';
import { ProductsShow } from './ProductsShow';
import axios from 'axios';
import { Modal } from './Modal';

export function ProductsPage () { 
  const [ products, setProducts ] = useState([]); 
  const [ ProductVisible, setProductVisible ] = useState(false);
  const [ currentProduct, setCurrentProduct ] = useState ({});

  const handleIndex = () => { 
    console.log('handleIndex');
    axios.get('http://localhost:3000/products.json').then((response) => { 
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => { 
    axios.post('http://localhost:3000/products.json', params).then((response) => { 
      setProducts([...products, response.data]);
      successCallback();
    })
  }

  const handleShow = (product) => { 
    console.log('handleShow', product);
    setProductVisible(true);
    setCurrentProduct(product);
  }

  const handleClose = () => { 
    console.log('handleClose');
    setProductVisible(false);
  }
  
useEffect( handleIndex, [] );


  return ( 
    <main>
      <ProductsIndex products={products} onShow={handleShow}/>
      <ProductsNew onCreate={handleCreate}/>
      <Modal show={ProductVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct}/>
      </Modal>
    </main>
  )
}