import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    try {
      
      const formData = new FormData()
      formData.append("productName",productName)
      formData.append("brandName",brandName)
      formData.append("category",category)
      formData.append("subcategory",subcategory)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("sellingPrice",sellingPrice)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})
       if(response.data.success){
        toast.success(response?.data?.message)
        setProductName("")
        setBrandName("")
        setCategory("")
        setSubcategory("")
        setPrice("")
        setSellingPrice("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
       
       }else{
        toast.error(response.data.message)
       }
    } catch (error) {
       toast.error(error.message)
    }

  }


  
  return (
    <div className="">
      <div className="bg-white p-2 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Enregistrer un produit </h2>
          <div
            className="w-fit ml-auto text-2xl  hover:text-red-600 cursor-pointer"
          
          ></div>
        </div>
        <form
        onSubmit={onSubmitHandler}
        
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
        >
          <label htmlFor="productName">Nom du produit</label>
          <input
            type="text"
            id="productName"
            placeholder="Le nom du produit ici"
            value={productName}
            name="productName"
            onChange={(e)=>setProductName(e.target.value)}
            required
            className="p-2 bg-slate-100 outline-none border rounded"
          />

          <label htmlFor="brandName" className="mt-3">
            Marque{" "}
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="La marque du produit"
            name="brandName"
            value={brandName}
            onChange={(e)=>setBrandName(e.target.value)}

            required
            className="p-2 bg-slate-100 outline-none border rounded"
          />
          <label htmlFor="category" className="mt-3">
            Catégorie
          </label>

          <div>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}   
            className="text-2xl text-white bg-slate-500 w-96">
              <option  value="Selectionner">Selectionner</option>
              <option value="Electronique">Electronique</option>
              <option value="Vetements">Vetements</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <label htmlFor="category" className="mt-3">
            Sous Catégorie
          </label>

          <div>
            <select  value={subcategory} onChange={(e)=>setSubcategory(e.target.value)} className="text-2xl text-white bg-slate-500 w-96">
              <option  value="Selection">Selectionner</option>
              <option value="Airpodes">Airpods</option>
              <option value="Camera">Camera</option>
              <option value="Earphones">Écouteurs</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Souris">Souris</option>
              <option value="Imprimantes">Imprimantes</option>
              <option value="Processeur">Processeur</option>
              <option value="Réfrigérateur">Réfrigérateur</option>
              <option value="Baffe">Baffe</option>
              <option value="Tondeuses">Tondeuses</option>
              <option value="Télévision">Télévision</option>
              <option value="Montres">Montres</option>
              <option value="Chaussures">Chaussures</option>
              <option value="Ordinateur">Ordinateurs</option>
              <option value="Vetements">Vetements</option>
              <option value="Autres">Autres</option>
            </select>
          </div>

          <div>
            <h2 className="mb-2">Vous pouvez téléchargé jusqu'a 4 images</h2>
            <div className="flex  gap-6 shadow-sm bg-slate-200  cursor-pointer">
              <label htmlFor="image1" className="mt-3">
                Image 1
                <img className="w-20" src={!image1? assets.upload_arera: URL.createObjectURL(image1)} alt="" />
                <input onChange={(e)=>setImage1(e.target.files[0])} type="file" hidden id="image1" />
              </label>
              <label htmlFor="image2" className="mt-3">
                Image 2
                <img className="w-20" src={!image2? assets.upload_arera: URL.createObjectURL(image2)} alt="" />
                <input onChange={(e)=>setImage2(e.target.files[0])} type="file" hidden id="image2" />
              </label>

              <label htmlFor="image3" className="mt-3">
                Image 3
                <img className="w-20" src={!image3? assets.upload_arera: URL.createObjectURL(image3)} alt="" />
                <input onChange={(e)=>setImage3(e.target.files[0])} type="file" hidden id="image3" />
              </label>

              <label htmlFor="image4" className="mt-3">
                Image 4
                <img className="w-20" src={!image4? assets.upload_arera: URL.createObjectURL(image4)} alt="" />
                <input onChange={(e)=>setImage4(e.target.files[0])} type="file" hidden id="image4" />
              </label>
            </div>
          </div>

          
          <label htmlFor="price" className="mt-3">
            Prix :
          </label>
          <input
            type="Number"
            id="price"
            placeholder="888"
            value={price}
            name="price"
            required
            onChange={(e)=>setPrice(e.target.value)}
            className="p-2 bg-slate-100 outline-none border rounded"
          />

          <label htmlFor="sellingPrice" className="mt-3">
            Prix de vente:
          </label>

          <input
            type="Number"
            id="sellingPrice"
            placeholder="10000000000"
            value={sellingPrice}
            required
            name="sellingPrice"
            onChange={(e)=>setSellingPrice(e.target.value)}
            className="p-2 bg-slate-100 outline-none border rounded"
          />

          <label htmlFor="description" className="mt-3">
            Description: description
          </label>

          <textarea
            className="h-28 outline-none  border bg-slate-100 resize-none p-1"
            placeholder="Donnez une description au produit"
            rows={3}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            name="description"
            required
          ></textarea>
          <div  className="flex gap-3 flex-wrap">
            <h1 className="m2">La taille,La Capacité,Couleur</h1>
            <div onClick={()=>setSizes(prev =>prev.includes("S")? prev.filter(item=>item !=="S"):[...prev,'S'])}>
              <p className={`${sizes.includes("S")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("M")? prev.filter(item=>item !=="M"):[...prev,'M'])}>
            <p className={`${sizes.includes("M")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
            </div>

            <div onClick={()=>setSizes(prev =>prev.includes("L")? prev.filter(item=>item !=="L"):[...prev,'L'])}>
            <p className={`${sizes.includes("L")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
            </div>

            <div onClick={()=>setSizes(prev =>prev.includes("XL")? prev.filter(item=>item !=="XL"):[...prev,'XL'])}>
            <p className={`${sizes.includes("XL")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
            </div>

            <div onClick={()=>setSizes(prev =>prev.includes("XXL")? prev.filter(item=>item !=="XXL"):[...prev,'XXL'])}>

            <p className={`${sizes.includes("XXL")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
            </div>

            <div onClick={()=>setSizes(prev =>prev.includes("500 GO")? prev.filter(item=>item !=="500 GO"):[...prev, '500 GO'])}>

            <p className={`${sizes.includes("500 GO")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>500 GO</p>
            </div>

            <div onClick={()=>setSizes(prev =>prev.includes("250 GO")? prev.filter(item=>item !=="250 GO"):[...prev, '250 GO'])}>

            <p className={`${sizes.includes("250 GO")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>250 GO</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("120 GO")? prev.filter(item=>item !=="120 GO"):[...prev, '120 GO'])}>

            <p className={`${sizes.includes("120 GO")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>120 GO</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("60 GO")? prev.filter(item=>item !=="60 GO"):[...prev,'60 GO'])}>
            <p className={`${sizes.includes("60 GO")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>60 GO</p>
            </div>
            {/* Couleur */}
            <div onClick={()=>setSizes(prev =>prev.includes("Blanc")? prev.filter(item=>item !=="60 GO"):[...prev,'Blanc'])}>
            <p className={`${sizes.includes("Blanc")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Blanc</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("Noir")? prev.filter(item=>item !=="60 GO"):[...prev,'Noir'])}>
            <p className={`${sizes.includes("Noir")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Noir</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("Marron")? prev.filter(item=>item !=="Marron"):[...prev,'Marron'])}>
            <p className={`${sizes.includes("Marron")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Marron</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("Rouge")? prev.filter(item=>item !=="Marron"):[...prev,'Rouge'])}>
            <p className={`${sizes.includes("Rouge")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Rouge</p>
            </div>
            <div onClick={()=>setSizes(prev =>prev.includes("Gris")? prev.filter(item=>item !=="Gris"):[...prev,'Gris'])}>
            <p className={`${sizes.includes("Gris")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Gris</p>
            </div>
          </div>

          <button className="py-1 text-start px-20 shadow-lg bg-red-600 text-white mb-10 uppercase  hover:bg-red-700">
            Ajouté l'article
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default Add;
