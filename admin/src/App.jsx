import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes,Route } from "react-router-dom";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import Liste from "./pages/Liste";
import Login from "./components/Login";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import User from "./pages/User";

export const  backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "FCFA"
const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"")

  useEffect(()=>{
localStorage.setItem('token',token)
  },[token])
  
  return (
    <div className="bg-gray-300 min-h-screen">
      <ToastContainer />
      { token === ""
      ? <Login setToken={setToken} />:
      <>
        <Navbar setToken={setToken} />
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[80%] mx-auto ml-[max(3vw,20px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} /> 
                <Route path="/list" element={<Liste token={token} />} /> 
                <Route path="/orders" element={<Orders token={token} />} /> 
                <Route path="/users" element={<User token={token} />} /> 
              </Routes>
          </div>
        </div>
      </>}
    </div>
  );
};

export default App;
