import jwt from 'jsonwebtoken'

const adminAuth = async(req, res,next)=>{
try {
    const {token} = req.headers
    if(!token){
        return res.json({success:false,error:true,message:"Vous n'etes pas un admin !"})
    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
     if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD && 
        token_decode!==process.env.ADMIN_EMAIL2+process.env.ADMIN_PASSWORD2  &&
        token_decode!==process.env.ADMIN_EMAIL3+process.env.ADMIN_PASSWORD3 ){
            return res.json({success:false,error:true,message:"Vous n'etes pas un admin !"})

     }
     next()
} catch (error) {
    console.log(error)
    return res.json({success:false,error:true,message:error.message})

}
}

export default adminAuth