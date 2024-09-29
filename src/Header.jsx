import { Link } from 'react-router-dom';
import { LogoutLink } from './LogoutLink'

export function Header () { 
  return ( 
    <header>
      <Link to='/'>Products Page</Link> | <Link to='/LoginPage'>Login</Link> | <Link to='/SignupPage'>Sign Up</Link> | <LogoutLink /> | <a href="#create-product">Create Product</a>
    </header>
  )
}