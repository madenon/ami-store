import React from "react";
import FooterTop from "./FooterTop";
import { assets } from "../assets/assets";
import Partenaire from "../pages/Partenaires";

const Footer = () => {
  return (
    <div className="shadow-md border-b-2 bg-black/95 mt-16 text-white">
      <FooterTop />
      <div
        className="flex flex-col sm:grid grid-cols-[2fr_2fr_2fr]
         gap-1 my-1 mt-6 text-sm"
      >
        <div className="text-center items-center">
          <img
            src={assets.logo_n}
            className="mb-5 w-10 text-center items-center"
            alt=""
          />
          <p className="w-full  md:w-3/3 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            doloremque sit eaque ducimus rerum minima ad, suscipit labore a
            possimus eos, voluptatem, expedita dolores incidunt ratione esse
            quod blanditiis cumque?
          </p>
        </div>
        <div className="">
          <p className="text-xl mb-5 text-center items-center  uppercase ">
            Entreprise
          </p>
          <ul className="flex flex-col gap-1 font-semibold text-center items-centerext-gray-600">
            <li>ACCUEIL</li>
            <li>A PROPOS DE NOUS</li>
            <li>LIVRAISON</li>
            <li>POLITIQUE DE CONFIDENTIALITÉ</li>
          </ul>
        </div>
        

        <div className="">
          <p className="text-xl  mb-5 text-center items-center uppercase ">
            Nous contacter
          </p>
          <ul className="flex  font-semibold flex-col gap-1 text-center items-center ">
            <li>+212691942109</li>
            <li>Email: na-contact@gmail.ci</li>
          </ul>
        </div>
      </div>
      <div>
        <Partenaire />
        <p className="py-5 text-sm text-center">
          Copyright &copy; 2024 EcoTech - Tout droit réservé
        </p>
      </div>
    </div>
  );
};

export default Footer;
