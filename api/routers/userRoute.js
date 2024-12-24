import express from "express"
import {  adminLogin, getAllUser, loginuser, registerUser } from "../controllers/userController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginuser)
userRouter.post("/admin", adminLogin)
userRouter.post("/all",adminAuth, getAllUser)


export default userRouter