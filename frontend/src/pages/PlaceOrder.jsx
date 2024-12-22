import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { navigate,backendUrl,token,cartItems, setCartItems,getCartAmount,delivery_fee,products } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    commune: "",
    email: "",
    street: "",
    city: "",
    zipecode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmiHandlert = async(e)=>{
    e.preventDefault()
    try {
      let  orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item]>0) 
            {
              const itemInfo = structuredClone(products.find(product=>product._id===items))
              if (itemInfo) {
                itemInfo.size = item
                itemInfo.quantity=cartItems[items][item]
                orderItems.push(itemInfo)
                
              } 
          }
        }

      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }
      switch(method){
        // Cod payment
        case'cod':
        const response = await axios.post(backendUrl+"/api/order/place",orderData,{headers:{token}})
        if (response.data.success) {
          setCartItems({})
          navigate("/orders")
        }else{
          console.log(error)
          toast.error(response.data.message)
        }
        break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl +"/api/order/stripe",orderData,{headers:{token}})
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data 
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }

  }
  return (
    <form  onSubmit={onSubmiHandlert} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[380x]  shadow-sm bg-slate-100">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Inoformation sur"} text2={"La livraison"} />
        </div>
        {/* Nom et prenom */}
        <div className="-mb-1">
          <label
            className="items-center text-center text-2xl  justify-center ml-20 font-medium"
            htmlFor=""
          >
            Nom et Prénom
          </label>
          <div className="flex gap-2">
            <input
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border border-gray-300  -mb-2 rounded py-1 px-3.5 outline-none"
              type="text"
              placeholder="Votre nom"
              required
            />
            
            <input
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="border border-gray-300 -mb-2 rounded py-1 px-3.5 outline-none"
              type="text"
              placeholder="Votre prénom"
              required
            />
          </div>
        </div>
        {/* Email */}
        <div className="max-w-full -mb-1">
          <label
            className="items-center text-center text-2xl  justify-center ml-20 font-medium"
            htmlFor=""
          >
            Email
          </label>
          <div className="flex">
            <input
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              className="border w-[430px] border-gray-300  -mb-2 rounded py-1 px-3.5 outline-none"
              type="email"
              placeholder="Votre email"
              required
            />
          </div>
        </div>
        {/* La rue */}
        <div className="max-w-full">
          <label
            className="items-center text-center text-2xl  justify-center ml-20 font-medium"
            htmlFor=""
          >
            Rue
          </label>
          <div className="flex">
            <input
              onChange={onChangeHandler}
              name="street"
              value={formData.street}
              className="border w-[430px] border-gray-300 -mb-2  rounded py-1.5 px-3.5 outline-none"
              type="text"
              placeholder="La rue"
            />
          </div>
        </div>

        {/*Ville Quartier  */}

        <div className="-mb-1 gap-5">
          <label
            className="items-center text-center text-2xl  justify-center ml-20 font-medium"
            htmlFor=""
          >
            Pays Et Ville
          </label>
          <div className="flex gap-2">
            <input
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="border border-gray-300 -mb-2 rounded py-1 px-3.5 outline-none"
              type="text"
              placeholder="Pays de livraison"
            />
            <input
              className="border border-gray-300 -mb-2 rounded py-1 px-3.5 outline-none"
              type="text"
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              placeholder="Ville"
            />
          </div>
        </div>
        {/* Comune et code postal */}

        <div className="-mb-1">
          <label
            className="items-center text-center text-2xl gap-5  justify-center ml-10 font-medium"
            htmlFor=""
          >
            Commune Et Code pstale
          </label>
          <div className="flex gap-2">
            <input
              onChange={onChangeHandler}
              name="commune"
              value={formData.commune}
              className="border border-gray-300 -mb-2 rounded py-1 px-3.5 outline-none"
              type="text"
              required
              placeholder="Commune de livraison"
            />
            <input
              className="border border-gray-300 -mb-2 rounded py-1 px-3.5 outline-none"
              type="number"
              onChange={onChangeHandler}
              value={formData.zipecode}
              name="zipecode"
              placeholder="Code"
            />
          </div>
        </div>
        {/* Numéro */}
        <div className="max-w-full mb-1  ">
          <label
            className="items-center text-center text-2xl  justify-center ml-20 font-medium"
            htmlFor=""
          >
            Votre Numéro
          </label>
          <div className="flex ">
            <input
              onChange={onChangeHandler}
              value={formData.phone}
              name="phone"
              className="border rounded w-[430px] border-gray-300  py-1 px-3.5 outline-none"
              type="number"
              placeholder="Votre Numéro"
              required
            />
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Méthode"} text2={"de Payement"} />
          <div className="flex gap-2 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-1 border p-2 px-3 bg-white cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex justify-between items-center  bg-white gap-3 border p-2  cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-700 text-sm  uppercase font-medium">
                Payer à la livraison
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit"
             
              className="bg-red-400 text-white rounded-t-full px-10 py-3 text-sm uppercase "
            >
              Finalisez votre commande
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
