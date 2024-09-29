import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductsPage } from './ProductsPage';
import { SignupPage } from './SignupPage'
import { LoginPage } from './LoginPage'


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
    ],
  },
]);

function App () { 
  return <RouterProvider router={router} />;
}


export default App