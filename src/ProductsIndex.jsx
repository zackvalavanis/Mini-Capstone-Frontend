// export function ProductsIndex({ products, onShow }) {
//   return (
//     <div>
//       <h4>All Products!</h4>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>Name: {product.name}</h2>
//           <h2>Price: {product.price}</h2>
//           {/* Check if images exist before trying to render */}
//           {product.images[0] && <img src={product.images[0].image_url} alt={product.name} />}
          
//           {/* Render images_with_default with the correct image reference */}
//           {product.images_with_default.map((image) => (
//             <img className='image' key={image.id} src={image.image_url} alt="Product Image" />
//           ))}
//           <button className='moreInfo' onClick={() => onShow(product)}>More Info</button>
//         </div>
//       ))}
//     </div>
//   );
// }
