import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  brandName: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  image: { type: Array,required:true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  sizes: { type: Array },
  date: { type: Number, required: true },
  role:{type:String},
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
