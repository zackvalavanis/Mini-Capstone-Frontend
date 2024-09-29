import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export function ProductsNewPage () { 
  const navigate = useNavigate();
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log('handleSubmit');
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/products.json', params).then((response) => { 
      console.log(response.data);
      navigate('/');
    })  
  }
  return (
    <div id='create-product'>
      <h1>Create Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name='name' id='name' type='text' />
          </div>
          <div>
            Inventory: <input name='inventory' type='text' />
          </div>
          <div>
            Price: <input name='price' id='price' type='text' />
          </div>
          <div>
            Description: <input name='description' id='description' type='text' />
          </div>
          <div>
            Supplier ID: <input name='supplier_id' id='supplier_id' type='text' />
          </div>
          <button type='submit'>Create New</button>
        </form>
    </div>
  )
}