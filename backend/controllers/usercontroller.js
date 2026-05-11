const User=require('../models/usermodel')
const bcrypt=require('bcrypt')

const createuser=async (req,res)=>{
        const {fullname,email,password}=req.body
        try {
            const usr=await User.findOne({email})
            if(usr){
               return res.status(400).json({msg:"User Already Exists"})
            }
            const trupass=await bcrypt.hash(password,10)
            const newdata=await new User({
                fullname,
                email,
                mobileno,
                password:trupass

            })
            await newdata.save()
            res.status(200).json({msg:"User Created Successfully",data:newdata})
            
        } catch (error) {
            res.status(400).json({msg:"Server Error"})
            
        }
}
