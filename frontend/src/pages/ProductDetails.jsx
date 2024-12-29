import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  const hanldeMouseEnterProduct = (imageUrl) => {
    setImage(imageUrl);
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      console.log("Coord", left, top, width, height);
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setZoomImageCoordinate({
        x,
        y,
      });
    },
    [zoomImageCoordinate]
  );
  const handelZoomOutImage = () =>{
    setZoomImage(false)
  }

  return productData ? (
    <div className="border-t-2 mt-16 pt-10 transition-opacity ease-in duration-500 opacity-100 mx-auto container ">
      {/* product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll shadow bg-slate-600 justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  onMouseEnter={() => hanldeMouseEnterProduct(item)}
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 mt-0 flex-shrink-0  cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[40%] shadow rounded relative">
            <img
              src={image}
              alt="imagesActive"
              className="w-full h-96 object-scale-down mix-blend-multiply p-1"
              onMouseMove={handleZoomImage}
              onMouseLeave={handelZoomOutImage}
            />
            {/* Zoom images */}
            
              { zoomImage && (
                 <div className="hidden lg:block absolute min-w-[420px] min-h-[500px]  bg-slate-200  p-1 -right-[700px] top-0">
                 <div
                   className="w-full h-full min-h-[400px] min-w-[520px]  mix-blend-multiply scale-125"
                   style={{
                     backgroundImage: `url(${image})`,
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: `${zoomImageCoordinate.x * 100}% ${
                       zoomImageCoordinate.y * 100
                     }%`,
                   }}
                 ></div>
               </div>
              )}
            
          </div>
        </div>

        {/* product image */}
        <div className="flex-1">
          <h1 className="text-2xl">{productData.category}</h1>
          <p className="font-medium px-2 text-red-300 rounded-full text-2xl mt-2">
            {productData.productName}
          </p>
          <div className="text-red-600 flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <div className="flex items-center gap-2 text-2xl font-medium">
            <p className="mt-5 line-through text-3xl text-red-300  font-medium">
              {productData.price} {currency}
            </p>
            <p className="mt-5 text-3xl text-slate-500 font-medium">
              {productData.sellingPrice} {currency}
            </p>
          </div>
          <p className="mt-5 text-slate-600 font-medium md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            {/* <p>Selectionner la taille</p> */}
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded animate-pulse bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <button
              onClick={() => addToCart(productData._id, size)}
              className=" text-black hover:bg-red-500  font-medium border border-red-400 px-0 py-3 rounded-se-lg text-sm bg-white "
            >
              ACHETR MAINTENANT
            </button>
            <button
              onClick={() => addToCart(productData._id, size)}
              className=" text-black hover:bg-red-500 font-medium border border-red-400 px-4 py-3 rounded-se-lg text-sm bg-white"
            >
              AJOUTER AU PANIER
            </button>
          </div>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original</p>
            <p>Payement Cash à la livraison</p>
            <p>Facile echange</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetails;
