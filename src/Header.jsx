import { Link } from 'react-router-dom';
import { LogoutLink } from './LogoutLink'

export function Header () { 
  return ( 
    <header>
      <Link to='/products'>Products Page</Link> | <Link to='products/:id'>Show Product</Link> | <Link to="/products/new">New Recipe</Link> | <Link to='/SignupPage'>Sign Up</Link> | <Link to='/LoginPage'>Login</Link> | <LogoutLink /> 
    </header>
  )
}