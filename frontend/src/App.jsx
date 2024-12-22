import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryProduct from "./pages/CateGoryProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SearchProduct from "./pages/SearchProduct";
import Contact from "./pages/Contact";
import About from "./pages/About";
import User from "./pages/User";
import AdminPanel from "./pages/AdminPanel";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";
import AllUsers from "./pages/AllUsers";
import Orders from "./components/Orders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from "./pages/PlaceOrder";
import NewsletterBox from "./components/NewsletterBox";
import Verify from "./pages/Verify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Header />
      <div className='min-h-[calc(100vh-120px)] pt-24 px-8'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-category" element={<CategoryProduct />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<User />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/all-products" element={<AllProducts />} />
        <Route path="/admin-panel/all-users" element={<AllUsers />} />

       </Routes>
      </div>
            <NewsletterBox />
      
       <Footer/>

    </>
  );
};

export default App;
