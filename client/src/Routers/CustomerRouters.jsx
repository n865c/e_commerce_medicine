import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/Homepage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetail from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import LoginForm from "../customer/Auth/LoginForm";
import RegisterForm from "../customer/Auth/RegisterForm";

const CustomerRouters=()=>{
    return (
        <div>
        <div>
<Navigation/>
        </div>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<HomePage/>}/>
        <Route path="/register" element={<HomePage/>}/>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/account/order" element={<Order/>}/>
            <Route path="/account/order/:orderId" element={<OrderDetails/>}/>
        </Routes>
        <div>
            <Footer/>
        </div>
        </div>
    )
}
export default CustomerRouters;