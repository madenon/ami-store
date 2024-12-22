import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object, default:{}},
    profilePic:{type:String, default:"https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"},
}, {minimize:false})
const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel