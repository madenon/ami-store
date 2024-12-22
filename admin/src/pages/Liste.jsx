import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Liste = ({ token }) => {
  const [list, setList] = useState([]);

  const fecthList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/products");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fecthList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fecthList();
  }, []);
  return (
    <>
      <p className="mb-2">Produits</p>
      <div className="flex flex-col gap-2 ">
        {/* List Table Title */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-red-100 text-sm">
          <b>Image</b>
          <b>Nom</b>
          <b>Nom de marque</b>
          <b>Catégorie</b>
          <b>Prix de vente</b>
          <b className="text-center text-lg uppercase text-red-400">Supprimé</b>
        </div>
        {/* Produits list  */}
        {list?.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
              key={index}
            >
              <img className="w-12" src={item?.image[0]} alt="" />
              <p>{item?.productName}</p>
              <p>{item?.brandName}</p>
              <p>{item?.category}</p>
              <p>
                {item?.sellingPrice}{' '}
                {currency}
              </p>
              <p onClick={()=>removeProduct(item._id)} className="text-right md:text-center  text-red-400 cursor-pointer text-lg">
                X
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Liste;
