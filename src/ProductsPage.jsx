import { ProductsIndex } from './ProductsIndex'
import { useState, useEffect } from 'react'
import { ProductsNew } from './ProductsNew'
import axios from 'axios'

export function ProductsPage () { 
  const [ products, setProducts ] = useState([]); 

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

useEffect( handleIndex, [] );


  return ( 
    <main>
      <ProductsIndex products={products}/>
      <ProductsNew onCreate={handleCreate}/>
    </main>
  )
}