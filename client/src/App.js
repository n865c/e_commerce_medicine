import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetail from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div >
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetail/> */}
      {/* <Cart/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
