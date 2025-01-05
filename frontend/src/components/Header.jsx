import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { GrSearch } from "react-icons/gr";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { PiShoppingCartThin } from "react-icons/pi";
import { ShopContext } from "../context/ShopContext";
import { FaCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const Header = () => {
const location = useLocation()
  const [visible, setVisible] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const { getCartCount, setCartItems, navigate, token, setToken, search,
    setSearch,showSearch,
    setShowSearch } =
    useContext(ShopContext);

  
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    toast.success("Vous êtes Déconnecté");
    navigate("/login");
  };
  useEffect(()=>{
    if(location.pathname.includes("recherches")){
      setVisible(true)
    }else{
      setVisible(false)
    }
  },[location])
  return (
    <header className="h-16 shadow-md  bg-white/100 w-full fixed  z-50 top-0">
      <div className="h-full container mx-auto flex items-center  px-4 justify-between">
        <div className=" p-2">
          <Link to="/">
            <img src={assets.logo_n} className="w-9" alt="" />
          </Link>
        </div>
        {showSearch ? (
     
        <div className="lg:flex md:flex  flex   sm:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
          value={search}
             onChange={(e)=>setSearch(e.target.value)}
            placeholder="La barre de recherche "
            className="w-full bg-white outline-none"
          />
           
            <div className="text-lg rounded-tl-full cursor-pointer w-8 h-8 flex-1  min-w-[50px] bg-red-400 flex items-center justify-center rounded-r-full text-white">
            <GrSearch onClick={()=>setShowSearch(true)}  />
          <img onClick={()=>setShowSearch(false)} className="cursor-pointer hidden " src={assets.cross_icon}  alt="" />
          </div>
           
        </div>
       
        ):null}
        {/* Items */}

        <div className="flex items-center gap-3">
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt=""
            className="w-5 cursor-pointer sm:hidden"
          />
          <ul className="hidden   sm:flex gap-3 text-sm text-gray-700 ">
            {!token ? (
              ""
            ) : (
              <div className="relative  flex justify-center">
                <NavLink
                  to="/user"
                  className="flex flex-col items-center gap-1"
                  onClick={() => setMenuDisplay((prev) => !prev)}
                >
                  <p className=" hover:rounded-full  px-1 py-1">
                    <FaCircleUser className="text-2xl " />
                  </p>
                  <hr className="w-3/4 border-none h-[4px] bg-slate-700 hidden" />
                </NavLink>
                {menuDisplay && (
                  <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded ">
                    <nav>
                      <NavLink
                        to="/orders"
                        className="whitespace-nowrap  hover:bg-slate-100"
                      >
                        Mes commandes
                      </NavLink>
                    </nav>
                  </div>
                )}
              </div>
            )}

            <NavLink onClick={()=>window.scrollTo({top:"10", behavior:"smooth"})} to="/" className="flex flex-col items-center gap-1">
              <p className=" hover:rounded-full    px-1 py-1">Accueil</p>
              <hr className="w-3/4 border-none h-[4px] bg-slate-700 hidden" />
            </NavLink>

            <NavLink onClick={()=>window.scrollTo({top:"10", behavior:"smooth"})} to="/about" className="flex flex-col items-center gap-1">
              <p className=" hover:rounded-full   px-1 py-1 ">A propos</p>
              <hr className="w-3/4 border-none h-[4px] bg-slate-700 hidden" />
            </NavLink>

            <NavLink onClick={()=>window.scrollTo({top:"30", behavior:"smooth"})} to="/contact" className="flex flex-col items-center gap-1">
              <p className=" hover:rounded-full   px-1 py-1 ">Contact</p>
              <hr className="w-3/4 border-none h-[4px] bg-slate-700 hidden" />
            </NavLink>

            <NavLink onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/cart" className="flex flex-col items-center gap-1">
              <p className="text-xl relative hover:rounded-full  px-1 py-1">
                <PiShoppingCartThin />
                <span className=" absolute -top-3 right-1 text-2xl font-medium text-black w-5 h-5 rounded-full p-1 flex items-center justify-center">
                  <small className="text-sm">{getCartCount()}</small>
                </span>
              </p>
              <hr className="w-3/4 border-none h-[4px] bg-slate-700 hidden" />
            </NavLink>

            {!token ? (
              <NavLink onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} to="/login" className="flex flex-col items-center gap-1">
                <p className="rounded-full px-3 py-1 bg-red-400 uppercase rounded-tl-none text-white ">
                  Login
                </p>
                <hr className="w-3/4 border-none bg-slate-700 h-[4px] hidden " />
              </NavLink>
            ) : (
              <>
                <NavLink className="flex flex-col items-center gap-1">
                  <p
                    onClick={logout}
                    className=" rounded-full px-3 py-1 rounded-tl-none uppercase bg-red-300  hover:bg-red-500 "
                  >
                    Déconnexion
                  </p>
                  <hr className="w-3/4 border-none bg-slate-700 h-[4px] hidden " />
                </NavLink>
              </>
            )}
          </ul>
        </div>
        {/* sidebar menu pour les petits ecrans */}
        <div
          className={`bottom-0 overflow-hidden gap-3  bg-white/100 transition-all fixed z-50 top-0 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col">
            <div
              onClick={() => setVisible(false)}
              className="flex  items-center gap-4 p-3"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p className=" cursor-pointer text-2xl">Retour au menu</p>
            </div>

            <NavLink
            onClick={()=>window.scrollTo({top:"20", behavior:"smooth"} &&  setVisible(false))}
            className="py-2 pl-6  hover:rounded-full  px-3 text-red-slate text-2xl"
              to="/"
            >
              Accueil
            </NavLink>
            <hr className="w-44 h-2 bg-slate-500 ml-6 rounded-t-lg hover:bg-slate-800" />

            <NavLink
            onClick={()=>window.scrollTo({top:"20", behavior:"smooth"} &&  setVisible(false))}
            className=" hover:rounded-full  px-3 py-1 pl-6 text-slate-500 text-2xl"
              to="/about"
            >
              A Propos de nous
            </NavLink>
            <hr className="w-44 h-2 bg-slate-500 ml-6 rounded-t-lg hover:bg-slate-800" />

            <NavLink
            onClick={()=>window.scrollTo({top:"20", behavior:"smooth"} &&  setVisible(false))}
            className=" hover:rounded-full  px-3 py-1 pl-6 text-slate-500 text-2xl"
              to="/contact"
            >
              Contact
            </NavLink>
            <hr className="w-44 h-2 bg-slate-500 ml-6 rounded-t-lg hover:bg-slate-800" />

            <NavLink
            onClick={()=>window.scrollTo({top:"20", behavior:"smooth"} &&  setVisible(false))}
            className="hover:rounded-full relative  px-3 py-1 pl-6 text-slate-500 text-2xl "
              to="/cart"
            >
              <PiShoppingCartThin className="text-slate-500 text-2xl" />
              
              <span className="-top-2 right-[78]  absolute text-2xl font-medium bg-rose-800 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center">
                  <small className="text-sm bg-red">{getCartCount()}</small>
                </span>
            </NavLink>
            <hr className="w-44 h-2 bg-slate-500 ml-6 rounded-t-lg hover:bg-slate-800" />

            <NavLink
            onClick={()=>window.scrollTo({top:"20", behavior:"smooth"} &&  setVisible(false))}
            className="hover:rounded-full  px-3 py-1 pl-6 text-slate-500   text-2xl"
              to="/user"
            >
              <LuUserCircle2 />
            </NavLink>
            <hr className="w-44 h-2 bg-slate-500 ml-6 rounded-t-lg hover:bg-slate-800" />
            <NavLink
            onClick={()=>window.scrollTo({top:0, behavior:"smooth"} &&  setVisible(false))}
              
              className=" hover:rounded-full  px-3 py-1 pl-6 text-slate-500 text-2xl"
              to="/login"
            >
              Se Connecter
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
