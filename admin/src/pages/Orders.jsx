import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const statusHandler = async(event,orderId)=>{
    try {
      const response = await axios.post(backendUrl +"/api/order/status",{orderId,status:event.target.value},{headers:{token}})
      if(response.data.success){
        await fetchAllOrders()
      }
      
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
      
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div className="bg-gray-200  shadow-lg">
      <h3 className="text-center font-semibold text-2xl">
        Pages des commandes
      </h3>

      <div>
        {orders.map((order, index) => (
          <div key={index} className="grid bg-black/50 grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 sm:text-sm text-gray-700">
            <img className="w-5" src={assets.parce_image} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="bg-gray-100 py-0.5" key={index}>
                        {item.productName} x {item.quantity}{" "}
                        <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p
                        className="bg-slate-200 py-0.5 shadow-md text-black"
                        key={index}
                      >
                        {item.productName} x {item.quantity}{" "}
                        <span>{item.size}</span>
                      </p>
                    );
                  }
                })}
              </div>

              <p className="text-white font-extrabold">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="text-white">
                <p className="text-slate-400">{order.address.street + ","}</p>
                <p className="text-slate-400">
                  {order.address.street +
                    "," +
                    order.address.city +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zipecode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Articles : {order.items.length}</p>
              <p className="mt-3">Methode :{order.paymentMethod} </p>
              <p>Payement :{order.payment ? "Fait" : "En attente "} </p>
              <p>Date : {new Date(order.date).toDateString()} </p>
            </div>
            <p className="text-sm sm:text-[15px]">{order.amount} {currency}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="bg-gray-400 text-white font-semibold p-5">
              <option className="font-bold" value="Validation de commande">Validation de commande</option>
              <option value="Préparation de commande">Préparation de commande</option>
              <option value="Transfert de commande">Transfert de commande</option>
              <option value="En  cours expédition">En  cours expédition</option>
              <option value="Livré">Livré</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
