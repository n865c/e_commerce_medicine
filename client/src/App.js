import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetail from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <Navigation/>
     <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
      <ProductDetail/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
