import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { NavLink } from "react-router-dom";

const CategoryList = () => {
  const { products, currency, backendUrl } = useContext(ShopContext);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(15).fill(null);
  const listCategory = async () => {
    setLoading(true);
    const response = await axios.post(
      backendUrl + "/api/product/get-category-product"
    );
    if (response.data.productByCategory) {
      setLoading(false);
      setCategoryList(response.data.productByCategory);
    }
  };
  useEffect(() => {
    listCategory();
  }, [products]);
  return (
    <div className="container mx-auto  mt-8">
      <div className="flex items-center gap-2 justify-between overflow-scroll scrollbar-none">
        {loading
          ? categoryLoading.map((el,index) => {
              return (
                <div className="h-16 w-16 md:w-20 md:20 rounded-full animate-pulse overflow-hidden bg-slate-200" key={"categoryLoading"+index}>

                </div>
              );
            })
          : categoryList.map((product, index) => {
              return (
                <NavLink
                  to={"/product-category/" + product?.subcategory}
                  key={"product"+index}
                  className="p-1 cursor-pointer"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden p-2 bg-slate-200 flex items-center justify-center">
                    <img
                      src={product?.image[0]}
                      alt={product.subcategory}
                      className="h-full  mix-blend-multiply object-scale-down hover:scale-125 transition ease-in-out"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base capitalize">
                    {product.subcategory}
                  </p>
                </NavLink>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryList;
