const jwt=require('jsonwebtoken')
const authmiddleware=async(req,res,next)=>{
    const header=req.header('athorization')
    if(!header){
        return res.status(400).json({msg:"please login to continue"})
    }
    try {
        const token=header.split(" ")[1]
        const decodetoken=jwt.verify(token,process.env.SECRET_KEY)
        req.worker=decodetoken
        next()
    } catch (error) {
        return res.status(401).json({msg:"Invalid Token"})
        
    }
}
module.exports=authmiddleware