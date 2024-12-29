import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const SearchProduct = () => {
      const { backendUrl,products } = useContext(ShopContext);
  
  const query = useLocation()
  console.log("Query product serache", query.search)
  const fetchProduct = async()=>{
    const response = await  axios.post(backendUrl +"/api/product/search", {query})
    console.log("Mes recherches=",response.data)
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <div>SearchProduct</div>
  )
}

export default SearchProduct