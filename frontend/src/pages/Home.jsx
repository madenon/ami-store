import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

      {products.map((product, index) => {
        return (
          <div className="grid" key={index}>
            <Link className='' to={`/product/${product._id}`}>
            <div  className="w-32">
              <img
                className="hover:scale-125 transition    ease-in-out"
                src={product.image[0]}
                alt={product.name}
                />
            </div>
                </Link>
            <p className="mt-2">{product.productName}</p>
            <p>
              {product.price} {currency}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
