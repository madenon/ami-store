import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between bg-blue-300">
      {/* Logo */}

      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src={assets.paneau} alt="" className="w-16 h-16 rounded-full" />
        <span>EcoTech Innov</span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">M</div>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <NavLink to="/">Nos Offres</NavLink>
        <NavLink to="/">Les critères d'éligibilité</NavLink>
        <NavLink to="/">Les paiament</NavLink>
        <NavLink to="/">Nos installations</NavLink>
        <NavLink to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
