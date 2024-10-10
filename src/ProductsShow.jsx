// export function ProductsShow ( {product, onUpdate, onDestroy} ) { 
//   const handleSubmit = (event) => { 
//     event.preventDefault();
//     const params = new FormData(event.target);
//     onUpdate(product.id, params, () => event.target.reset());
//   };

//   return (
//       <div>
//         <h1>Product Information:</h1>
//         <p>Name: {product.name}</p>
//         <p>Price: {product.price}</p>
//         <p>Description: {product.description}</p>
//         <form onSubmit={handleSubmit}>
//         <div className='show'>
//             Name: <input defaultValue={product.name} name='name' id='name' type='text' />
//           </div>
//           <div>
//             Inventory: <input defaultValue={product.inventory} name='inventory' type='text' />
//           </div>
//           <div>
//             Price: <input defaultValue={product.price} name='price' id='price' type='text' />
//           </div>
//           <div>
//             Description: <input defaultValue={product.description} name='description' id='description' type='text' />
//           </div>
//           <div>
//             Supplier ID: <input defaultValue={product.supplier_id} name='supplier_id' id='supplier_id' type='text' />
//           </div>
//           <button type='submit'>Update</button>
//         </form>
//         <button onClick={() => onDestroy(product.id)}>Delete</button>
//       </div>
//   );
// }