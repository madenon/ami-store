import React from "react";
import { assets } from "../assets/assets";

const Etudiant = () => {
  return (
      <div className="">
    <div className="mt-11 h-full container p-2 w-full  text-white bg-blue-400">
      <div className="flex justify-between">
        <h1 className="font-medium uppercase">Pour les étudiant</h1>
        <h2>Critères d'élibilités</h2>
        <div className="flex gap-1 font-semibold  border-2 text-slate-900">
          <p className="shadow-md cursor-pointer capitalize">Pc Portable</p>
          <p className="shadow-md cursor-pointer capitalize">Bureau</p>
          <p className="shadow-md cursor-pointer capitalize">Tablettes</p>
        </div>
      </div>
      </div>
      <div className="m-5">
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  <img src={assets.pc_1} alt="" />
  
  <div className="flex gap-3">

  </div>
 </div>
 <div>
 
 </div>
      </div>
    </div>

  );
};

export default Etudiant;
