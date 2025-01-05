import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-slate-200 mt-8">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Nous"} text2={"Contacter"} />
      </div>
      <div
        className="my-10 flex flex-col justify-center 
       md:flex-row gap-10 mb-28"
      >
        <img
          className="w-full md:max-w-[480px] rounded-full "
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 shadow-2xl">
          <p className="font-semibold text-xl text-gray-600">Notre magasin</p>
          <p className="text-gray-500">
            980 Bnaco <br /> 30 Abidjan Cote d'ivoire
          </p>
          <p className="text-gray-500">
            Tel:(255)097655 <br /> Email: nfr-@ecommerce.ci
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carrières chez Boutique groupe
          </p>
          <p className="text-gray-500">
            Savoir plus sur nos offres de recrutements
          </p>
          <div className="flex gap-2">
          <NavLink onClick={()=>window.scrollTo({top:'5px', behavior:"smooth"})} to={"/offre"} className="border border-orange-400 rounded-e-3xl py-4 hover:bg-orange-700 hover:text-white duration-500 uppercase">
          Nos offres
          </NavLink>
          <NavLink onClick={()=>window.scrollTo({top:'5px', behavior:"smooth"})} to={"/offre-etudiant"}  className="border border-orange-400 rounded-e-3xl py-4 hover:bg-orange-700 hover:text-white duration-500 uppercase">
          Offres étudiants
          </NavLink>
          <NavLink onClick={()=>window.scrollTo({top:'5px', behavior:"smooth"})} to={"/panneau-solaire-immobilier"}  className="border border-orange-400  rounded-e-3xl py-4 hover:bg-orange-700 hover:text-white duration-500 uppercase">
          Panneau Solaire
          </NavLink>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
