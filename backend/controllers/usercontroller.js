const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const createuser=async (req,res)=>{
        const {fullname,email,mobileno,password}=req.body
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

//login

const login=async(req,res)=> {
    const {email,password}=req.body
            try {
                const user=await User.findOne({email})
                if(!email){
                    res.status(404).json({msg:"User Not Registerd"})
                }
                const matchpassword=await bcrypt.compare(password,user.password)
                if(!matchpassword){
                    res.status(400).json({msg:"Password Invalid"})
                }   
                    res.status(200).json({msg:"Login Successful"})
             } catch (error) {
                res.status(500).json({msg:"Server Error"})
         }  
}

//read data

const readdata=async(req,res)=>{
    try {
        const usrdata=await User.findOne().sort({createdAt:-1})
        res.status(200).json({msg:"All Posts",post:usrdata})
    } catch (error) {
        res.status(500).json({msg:"Server Error"})
    }
}

//update data

const updata=async(req,res)=>{
    try {
        const {id}=req.params
        const updata=await User.findByIdAndUpdate(id,req.body,{new:true})
            if(!updata){
                res.status(404).json({msg:"Data Not Found"})
            }
            res.status(200).json({msg:"Data Updated Successfully"})
        
    } catch ({error}) {
        res.status(500).json({msg:"Server Error"})
    }
}

//delete data

const deldata=async(req,res)=>{
    try {
        const {id}=req.params
        const deldata=await User.findByIdAndDelete(id,req.body,{new:true})

        if(!deldata){
            res.status(404).json({msg:"Data Not Found"})
        }
        res.status(200).json({msg:"Data Deleted Successfully",deleted:deldata})
    } catch (error) {
        res.status(500).json({msg:"Server Error"})
    }
}

module.exports={createuser,login,readdata,updata,deldata}
