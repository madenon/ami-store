import React from "react";
import { backendUrl } from "../App";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";


const User = ({ token }) => {
  const [allUser, setAllUser] = useState([]);

  console.log(allUser, "AllUser");
  const fetchAllUser = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/user/all",
        {},
        { headers: { token } }
      );
      console.log("Bonjour user");
      if (response.data.success) {
        setAllUser(response.data.alluser);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, [token]);
  return (
    <div className="bg-white pb-4">
    <table className="w-full userTable">
      <thead>
      <tr className="bg-black text-white">
      <th>ID</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Date de création</th>
      </tr>
      </thead>

      <tbody className="">
        {allUser.map((el, index) => {
          return (
            <tr className="p-2">
              <td>{index + 1}</td>
              <td className="text-gray-400">{el?.name}</td>
              <td className="text-purple-500">{el?.email}</td>
              <td className="text-red-300">{moment(el?.createdAt).format("LL")} </td>
              <td>
               
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

  </div>
  );
};

export default User;
