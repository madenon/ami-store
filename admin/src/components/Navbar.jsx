import React from 'react'
import {assets} from "../assets/assets"
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-1 px-[4%] justify-between bg-red-400'>
        <img className='w-[max(5%,80px)] px-5 pt-1  text-whit'  src={assets.logo} alt="" />
     <button onClick={()=>setToken('')} className='bg-gray-600  text-white py-2 sm:px-2 m-2 rounded-s-full hover:bg-gray-900 text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar