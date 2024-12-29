import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import { query } from "express";

// upload product uploadProduct
const uploadProduct = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      category,
      description,
      subcategory,
      price,
      sellingPrice,
      sizes,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageUrls = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      productName,
      brandName,
      category,
      description,
      subcategory,
      price: Number(price),
      sellingPrice: Number(sellingPrice),
      sizes: JSON.parse(sizes),
      image: imageUrls,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();
    res.json({
      success: true,
      message: "Le produit a bien été créer",
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
//filter product
const filterProduct = async (req, res) => {};

// getCategoryProductOne

const getCategoryProductOne = async () => {

};

const getCategoryWiseProduct = async (req,res) => {
try {
  const {subcategory} = req?.body || req?.query
  const product = await productModel.find({subcategory})
  res.json({
    success:true, data:product, message:"Produits"
  })
} catch (error) {
  console.log(error);
  res.json({ success: false, error: true, message: error.message });
  
}

};

// function for add product
const getProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, error: false, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: true, message: error.message });
  }
};
//get product details
const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: true, message: error.message });
  }
};
const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("subcategory");

    const productByCategory = [];
    for (const subcategory of productCategory) {
      const product = await productModel.findOne({subcategory});
      if (product) {
        productByCategory.push(product);
      }
    }

    res.json({ success: true, message: "Category product", productByCategory });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: true, message: error.message });
  }
};
//editProduct

const editProduct = async () => {};
// remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      error: false,
      message: "L'article a bien été supprimé",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: true, message: error.message });
  }
};
const searchProduct = async (req, res) => {
try {
  
  const query = req.query.q
} catch (error) {
  res.json({success:false, query, error:true, message:error.message})
  
}
};

export {
  uploadProduct,
  filterProduct,
  getCategoryProductOne,
  getCategoryWiseProduct,
  getCategoryProduct,
  getProduct,
  getProductDetails,
  editProduct,
  removeProduct,
  searchProduct,
};
