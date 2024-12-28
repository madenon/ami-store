import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {backendUrl,token,setToken,navigate} = useContext(ShopContext)
  
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/user/login", {email,password})
   if(response.data.success){
     setToken(response.data.token)
     localStorage.setItem('token',response.data.token)
     toast.success(response.data.message)
   
   }else{
    toast.error(response.data.message)
   }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

   
  }
  useEffect(()=>{
if(token){
  navigate('/')
}
  },[token])
  return (
    <section id="login" className="bg-red-200 mt-16">
      <div className="mx-auto container px-4">
        <div className="bg-white p-4 max-w-md mx-auto ">
          {/* <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div> */}

          <form onSubmit={handleOnSubmit} className="">
            <div className="grid">
              <label htmlFor="">Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="current-email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Mot de passe: </label>
              <div className="bg-slate-100 p-2 flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Votre mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  value={password}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to="/forgotp" className="block w-fit ml-auto hover:cursor-pointer  text-lg">
              Mot de passe oublié
              </Link>
            </div>

            <button className="bg-red-300 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-500">
              Connexion
            </button>
          </form>
          <p className="my-5 text-lg text-slate-500">Vous n'avez pas de compte ? <Link to="/register">
            <span className="hover:text-red-600 hover:text-lg">S'inscrire</span>
          </Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
