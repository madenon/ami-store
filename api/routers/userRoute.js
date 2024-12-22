import express from "express"
import {  adminLogin, loginuser, registerUser } from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginuser)
userRouter.post("/admin", adminLogin)


export default userRouter