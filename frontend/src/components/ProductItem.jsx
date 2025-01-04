import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, productName, price}) => {
    const{currency}  =  useContext(ShopContext)

  return (
    <>
    <Link className='text-gray-700 bg-slate-200 cursor-pointer shadow-sm' to={`/product/${id}`}>
    <div className='overflow-hidden w-full '>
 <img  onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} className='hover:scale-110 transition  ease-out w-full border border-r-2 border-slate-300  shadow-lg   bg-slate-700  gap-5  max-h-[400px]' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{productName}</p>
    <p className='text-sm font-medium'>{price} {currency}</p>
    </Link>
    
    </>
  )
}

export default ProductItem