import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const HorizontalCardProduct = ({subcategory,heading}) => {
    const { backendUrl,products, currency,addToCart } = useContext(ShopContext);
 console.log(products)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const loadingList = new Array(15).fill(null)
      const [size,setSize] = useState("")
    


  return (
    <div className='container mx-auto px-0  my-6'>
        <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
  
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-4 '>
   {
   loading ?(
    loadingList.map((product,index)=>{
      return (
  <div key={"product"+index} className='w-full min-w-[180px] md:min-w-[300px] max-w-[180px] md:max-w-[300px] h-36 rounded-sm shadow flex'>
        <div className="bg-slate-200 h-full p-5 min-w-[100px] md:min-w-[125px]">
  
        </div>
        <div className='p-2 grid'>
           <h2 className='font-medium text-base md:text-lg text-ellipsis text-slate-700'>{product?.productName}</h2>
            <p className='text-slate-500 p-1'></p>
            <div className='flex'>
              <p className='text-2xl font-medium text-gray-600 p-1'></p>
            </div>
          
        </div>
  
  
  
               </div>
      )
    })
   ):(
    products.map((product,index)=>{
      return (
  <div key={"product"+index} className='w-full min-w-[180px] md:min-w-[300px] max-w-[180px] md:max-w-[300px] h-36 rounded-sm shadow flex'>
        <div className="bg-slate-200 h-full p-5 min-w-[100px] md:min-w-[125px]">
        <NavLink to={`/product/${product._id}`}>
         <img src={product.image[0]} alt="" className='object-scale-down  h-full hover:scale-125 transition-all' />
        </NavLink>
        </div>
        <div className='grid'>
           <h2 className='font-medium text-base md:text-lg text-ellipsis text-slate-700'>{product?.productName}</h2>
            <p className='text-slate-500 p-1'>{product.subcategory}</p>
            <div className='flex justify-between '>
              <p className='text-xl font-medium'>{product?.price}{" "}{currency}</p>
              <NavLink to={`/product/${product._id}`}>
              <p className=' w-12 h-6 text-center items-center bg-red-500 rounded-full hover:bg-red-800 text-white'>voir +</p>

              </NavLink>
            </div>
          
        </div>

  
  
               </div>
      )
    })
   )
  }
   </div>
      
    

      
    </div>
  )
}

export default HorizontalCardProduct