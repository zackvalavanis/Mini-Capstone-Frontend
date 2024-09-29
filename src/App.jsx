import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductsPage } from './ProductsPage';
import { ProductsNewPage } from './ProductsNewPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { ProductsIndexPage } from './ProductsIndexPage'
import axios from 'axios'


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
        element: <ProductsPage />
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
      }
    ],
  },
]);

function App () { 
  return <RouterProvider router={router} />;
}


export default App