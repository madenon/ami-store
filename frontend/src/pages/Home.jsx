import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import BannerPrduct from "../components/BannerPrduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";

const Home = () => {
  const { products, currency } = useContext(ShopContext);
  

  return (
   <>
   <CategoryList />
   <BannerPrduct/>

   <HorizontalCardProduct subcategory={"airpods"} heading={"Les airpodsla nouvelle technologie"} />
 <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">

</div>

   </>
  );
};

export default Home;
