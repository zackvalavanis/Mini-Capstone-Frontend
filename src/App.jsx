import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { CartedProductsIndex } from './CartedProductsIndex'
import { ProductsNewPage } from './ProductsNewPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { ProductsIndexPage } from './ProductsIndexPage'
import { ProductShowPage } from './ProductShowPage';
import axios from 'axios'
import { OrdersIndex } from './OrdersIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const router = createBrowserRouter([
  {
    element: ( 
      <div>
       <Header />
       <Outlet />
       <Footer />
      </div>
    ),
    children: [
      { 
        path: '/',
        element: <ProductsIndexPage />,
        loader: () => axios.get('http://localhost:3000/products.json').then(response => response.data)
      },
      { 
        path: '/LoginPage',
        element: <LoginPage />
      },
      {
        path: 'SignupPage',
        element: <SignupPage />
      },
      { 
        path: '/products/new',
        element: <ProductsNewPage />
      }, 
      { 
        path: '/products', 
        element: <ProductsIndexPage />, 
        loader: () => axios.get('http://localhost:3000/products.json').then(response => response.data)
      },
      { 
        path: '/products/:id',
        element: <ProductShowPage />, 
        loader: ({params}) => axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => response.data)
      }, 
      { 
        path: '/CartedProducts', 
        element: <CartedProductsIndex />, 
        loader: () => axios.get('http://localhost:3000/carted_products.json').then((response) => { 
          console.log(response.data);
          return (response.data);
        })
      },
      { 
        path: '/orders',
        element: <OrdersIndex />,
        loader: () => axios.get('http://localhost:3000/orders.json').then((response) => { 
          console.log(response.data);
          return response.data;
        })
      }
    ],
  },
]);

function App () { 
  return <RouterProvider router={router} />;
}


export default App