import { Header } from './Header';
import { Footer } from './Footer';
import { ProductsPage } from './ProductsPage';
import { SignupPage } from './SignupPage'
// import { LoginPage } from './LoginPage'

function App () { 
  return ( 
    <div>
      {/* <LoginPage /> */}
      <SignupPage />
      <Header />
      <Footer />
      <ProductsPage />
    </div>
  )
}


export default App