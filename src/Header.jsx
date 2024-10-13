import { Link } from 'react-router-dom';
import { LogoutLink } from './LogoutLink';
import { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import './Header.css'

export function Header() {
  let authenticationLinks;
  let showUserName;
  const [ currentUser, setCurrentUser ] = useState({});
  

  const getUserData = () => ( 
    axios.get('http://localhost:3000/users/current_user.json').then((response) => { 
      console.log(response.data);
      if (response.data === null){ 
        null 
      } else { 
        setCurrentUser(response.data);
      }
    })
  )

  useEffect(() => {
    getUserData();
  }, []);
  
  // Check if JWT is present
  const isLoggedIn = localStorage.getItem('jwt') !== null;
  if (!isLoggedIn) {
    console.log(localStorage, 'User is logged out');
    authenticationLinks = (
      <>
        <li>
          <Link className="dropdown-item" to="/LoginPage">
            Login
          </Link>
        </li>
        <li>
          <Link className='dropdown-item' to="/SignupPage">
            Signup
          </Link>
        </li>
      </>
    );
  } else { 
    console.log(localStorage, 'User is logged in');
    showUserName= <p>Welcome {currentUser.name}</p>  
    authenticationLinks = (
      <li>
        <LogoutLink className='dropdown-item' />
      </li>
    );
  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/products">
              Navbar
            </Link>
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
                  <Link className="nav-link active" aria-current="page" to="/products">
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link active' aria-current='page' to="/CartedProducts">
                    <AddShoppingCartIcon />
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/products/new">
                        New Product
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {authenticationLinks}
                  </ul>
                </li>
              </ul>
                <p className="welcome_message">
                  <Link to='/LoginPage'>
                  {showUserName}
                  </Link>
                </p>
              <div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
