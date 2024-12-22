import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routers/userRoute.js";
import { productRoute } from "./routers/productRoute.js";
import cartRouter from "./routers/cartRoute.js";
import orderRouter from "./routers/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()
// Middleware 
app.use(express.json());
app.use(cors())

// api endpoints 
app.use("/api/user", userRouter)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get('/', (req, res)=>{
    res.send("API  Working");
})


app.listen(port, ()=>{
    console.log(`Server bien demarré au port http://localhost:${port}`)
})
