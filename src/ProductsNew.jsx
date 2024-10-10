export function ProductsNew ({onCreate}) { 

  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
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
  );
}3