import express from "express";
import {
  editProduct,
  filterProduct,
  getCategoryProduct,
  getCategoryWiseProduct,
  getProduct,
  getProductDetails,
  removeProduct,
  searchProduct,
  uploadProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRoute = express.Router();

//product
productRoute.post(
  "/add",adminAuth,
  upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1},
    {name:'image4',maxCount:1}]),
  uploadProduct
);
productRoute.post("/singleProduct", getProductDetails);
productRoute.post("/remove", adminAuth, removeProduct);
productRoute.post("/update-product", editProduct);
productRoute.post("/get-category-product", getCategoryProduct);
productRoute.get("/products", getProduct);
productRoute.post("/category-product", getCategoryWiseProduct);
productRoute.get("/search", searchProduct);
productRoute.post("/filter-product", filterProduct);

export { productRoute };
