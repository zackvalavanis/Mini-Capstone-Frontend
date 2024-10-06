import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductsPage } from './ProductsPage';
import { ProductsNewPage } from './ProductsNewPage';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { ProductsIndexPage } from './ProductsIndexPage'
// import { ProductsShowPage } from './ProductsShowPage'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { LogoutLink } from './LogoutLink'



const router = createBrowserRouter([
  {
    element: ( 
      <div>
        <div>
          <Header />
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/products">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/products/new">
                          New Product
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/LoginPage">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/SignupPage">
                          Signup
                        </a>
                      </li>
                      <li>
                        <LogoutLink className='dropdown-item'>Logout</LogoutLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
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
      // { 
      //   path: './products/:id',
      //   element: <ProductsShowPage />, 
      //   loader: () => axios.get
      // }
    ],
  },
]);

function App () { 
  return <RouterProvider router={router} />;
}


export default App