import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const CategoryProduct = () => {
  const { products,search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (ev) => {
    if (category.includes(ev.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== ev.target.value));
    } else {
      setCategory((prev) => [...prev, ev.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((preve) =>
        preve.filter((item) => item !== e.target.value)
      );
    } else {
      setSubcategory((preve) => [...preve, e.target.value]);
    }
  };
  const applyFilter = ()=>{
    let productsCopy = products.slice()
    if (search) {
      productsCopy =productsCopy.filter(item=>item.productName.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subcategory.length > 0){
   productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () =>{
     let fpCopy = filterProducts.slice();
     switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
   break;
   case 'high-low':
    setFilterProducts(fpCopy.sort((a,b)=>(b.price -a.price)))
 break;
 default:
  applyFilter()
  break;
     }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter()
  }, [category,subcategory,search]);

  
useEffect(()=>{
sortProduct()
},[sortType])
 
  return (
    <div className="mt-10 flex  flex-col sm:flex-row sm:gap-10 pt-10 border-t">
      {/* {params?.categoryName} */}
      {/* Filter inputs */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-1 flex  text-xl items-center cursor-pointer gap-2"
        >
          Trier
          <img
            className={`h-4 bg-red-500 text-4xl font-medium sm:hidde shadow-md rounded-r-full ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category FIlter */}
        <div
          className={`border border-gray-300 bg-purple-400 text-white font-medium shadow-2xl  rounded-r-lg pl-2 py-2 mt-4 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Electronique"}
                onChange={toggleCategory}
              />{" "}
              ELectroniques
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Vetements"}
                onChange={toggleCategory}
              />{" "}
              Vetements
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Autre"}
                onChange={toggleCategory}
              />{" "}
              Autre
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}

        <div
          className={`border border-gray-300 bg-purple-300 pl-2 py-2 mt-4 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">SOUS CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm    font-medium">
          <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Airpodes"}
                onChange={toggleSubCategory}
              />{" "}
              Airpodes
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Camera"}
                onChange={toggleSubCategory}
              />{" "}
              Camera
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Earphones"}
                onChange={toggleSubCategory}
              />{" "}
              Earphones
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Mobiles"}
                onChange={toggleSubCategory}
              />{" "}
              Mobiles
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Souris"}
                onChange={toggleSubCategory}
              />{" "}
              Souris
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Imprimantes"}
                onChange={toggleSubCategory}
              />{" "}
              Imprimantes
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Processeur"}
                onChange={toggleSubCategory}
              />{" "}
              Processeur
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Réfrigérateur"}
                onChange={toggleSubCategory}
              />{" "}
              Réfrigérateur
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Baffe"}
                onChange={toggleSubCategory}
              />{" "}
              Baffe
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Tondeuses"}
                onChange={toggleSubCategory}
              />{" "}
              Tondeuses
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Télévision"}
                onChange={toggleSubCategory}
              />{" "}
              Télévision
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Montres"}
                onChange={toggleSubCategory}
              />{" "}
              Montres
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Chaussures"}
                onChange={toggleSubCategory}
              />{" "}
              Chaussures
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Ordinateur"}
                onChange={toggleSubCategory}
              />{" "}
              Ordinateur
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Vetements"}
                onChange={toggleSubCategory}
              />{" "}
              Vetements
            </p>
            <p className="flex gap-2">
              <input
              onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
                className="w-3"
                type="checkbox"
                value={"Autres"}
                onChange={toggleSubCategory}
              />{" "}
              Autres
            </p>
            
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"Tout"} text2={"Les produits"} />
          {/* Trier de produit */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent"> Tri Par Pertinence</option>
            <option value="low-high">Prix du plus pétit au plus élevé</option>
            <option value="high-low">Prix du plus haut au plus bas</option>
          </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              productName={item.productName}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
