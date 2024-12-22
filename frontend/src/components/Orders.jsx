import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, setCartItems, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log(response.data)
      if (response.data.success) {
        let allOrderItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item['paymentMethod'] = order.paymentMethod
            item["date"] = order.date;
            allOrderItem.push(item);
            setCartItems({})
          });
        });
        setOrderData(allOrderItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"Mes"} text2={"Commandes"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t
         border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />

              <div>
                <p className="sm:text-base font-medium">{item.productName}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>{item.price}{" "}{currency}
                  </p>
                  <p>Quantité    :{item.quantity} </p>
                  <p>Taille & Couleur:{item.size}   {item.colour}</p>
                  <p></p>
                </div>
                <p className="mt-1"> Date : 
                  <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-1">
                  Payement : <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 shadow-md bg-slate-300 rounded-s-xl py-2 text-gray-400 text-sm font-medium rounded-sm">
                Suivre ma commande{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
