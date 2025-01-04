import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import BannerPrduct from "../components/BannerPrduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";

const Home = () => {

  return (
   <div className="bg-slate-50">
   <CategoryList />
   <BannerPrduct/>

   <HorizontalCardProduct />


   </div>
  );
};

export default Home;
