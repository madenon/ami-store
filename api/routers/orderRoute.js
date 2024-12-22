import express from "express"
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"


const orderRouter = express.Router()
// Admin feactures
 orderRouter.post("/list", adminAuth,allOrders)
 orderRouter.post("/status", adminAuth,updateStatus)
//Payment Features 
orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/stripe",authUser,placeOrderStripe)

//User features
orderRouter.post("/userorders",authUser,userOrders)
// Verify payment 
orderRouter.post('/verify-stripe',authUser, verifyStripe)

export default orderRouter