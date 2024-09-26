import { ProductsIndex } from './ProductsIndex'
import axios from 'axios'
import { useState, useEffect } from 'rails'

export function ProductsPage () { 

  const [ Products, setProducts ] = useState([]); 

  const handleIndex = () => { 
    
  }


  return ( 
    <main>
      <div>
        <ProductsIndex />
      </div>
    </main>
  )
}