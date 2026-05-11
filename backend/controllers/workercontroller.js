const Worker=require('../models/workermodel')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')

const createworker=async (req,res) =>{
   const {fullname,email,mobileno,workname,experience,password}=req.body
   try {
        const wrkr = await Worker.findOne({email})
        if(wrkr){
            return res.status(400).json({msg:"Worker already Exists"})
        }
        const trupass=await bcrypt.hash(password,10)
         const newdata=await new Worker({
            fullname,
            email,
            mobileno,
            workname,
            experience,
            password:trupass
         })
         await newdata.save()
         res.status(200).json({msg:"Worker created Successfully",data:newdata})

   } catch (error) {
        res.status(400).json({msg:"Server Error"})
   }
}

const login = async(req,res)=>{
   const {email,password}=req.body
   try {
      const worker=await Worker.findOne({email})
      if(!worker){
         return res.status(404).json({msg:"Worker Not Registerd"})
      }
      const matchpassword=await bcrypt.compare(password,worker.password)
      if(!matchpassword){
         return res.status(404).json({msg:"Invalid Password "})
      }
      const token = jwt.sign({id:worker._id},process.env.SECRET_KEY,{expiresIn:'1h'})
      res.status(200).json({msg:"Login Successful",token:token})
   } catch (error) {
      console.log(error)
      return res.status(500).json({msg:"Server Error"})
   }
}

module.exports={login, createworker}