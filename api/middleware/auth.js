import jwt from "jsonwebtoken"

const authUser = async(req, res,next)=>{
   const {token}= req.headers 
   if(!token){
    return res.json({success:false,message:"Authorisaon refusé Connectez-vous"})
   }
   try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    next()
    //le id vient de la creation du token de userConroller
   } catch (error) {
    console.log(error)
    res.json({success:false, error:true,message:error.message})
    
   }

}

export default authUser