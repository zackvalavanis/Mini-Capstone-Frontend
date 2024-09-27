import { Header } from './Header';
import { Footer } from './Footer';
import { ProductsPage } from './ProductsPage';
import { SignupPage } from './SignupPage'
import { LoginPage } from './LoginPage'
import { LogoutLink } from './LogoutLink'

function App () { 
  return ( 
    <div>
      <LogoutLink />
      <LoginPage />
      <SignupPage />
      <Header />
      <Footer />
      <ProductsPage />
    </div>
  )
}


export default App