import { Link } from 'react-router-dom';
import { LogoutLink } from './LogoutLink';

export function Header() {
  let authenticationLinks;

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
                    Cart
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
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
