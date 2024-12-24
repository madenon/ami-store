import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import BannerPrduct from "../components/BannerPrduct";

const Home = () => {
  const { products, currency } = useContext(ShopContext);
  

  return (
   <>
   <CategoryList />
   <BannerPrduct/>
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">

{products.map((product, index) => {
  return (
    <div className="grid" key={index}>
      <Link className='' to={`/product/${product._id}`}>
      <div  className="w-36">
        <img
          className="hover:scale-125 transition ease-in-out"
          src={product.image[0]}
          alt={product.name}
          />
      </div>
          </Link>
      <p className="">{product.productName}</p>
      <p>
        {product.price} {currency}
      </p>
    </div>
  );
})}
</div>

   </>
  );
};

export default Home;
