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

//login

const login = async(req,res)=>{
   const {email,password}=req.body
   try {
      const worker=await Worker.findOne({email})
      if(!worker){
         return res.status(404).json({msg:"Worker Not Registerd"})
      }
      const matchpassword=await bcrypt.compare(password,worker.password)
      if(!matchpassword){
         return res.status(400).json({msg:"Invalid Password "})
      }
      const token = jwt.sign({id:worker._id},process.env.SECRET_KEY,{expiresIn:'1h'})
      res.status(200).json({msg:"Login Successful",token:token})
   } catch (error) {
      return res.status(500).json({msg:"Server Error"})
   }
}

//dataread

const getdata = async (req,res)=>{
   try {
      const datas = await Worker.find().sort({createdAt:-1})
      res.status(200).json({msg:"All Posts",data:datas})
   } catch (error) {
      res.status(500).json({msg:"Server Error"})
   }
}

//data update

const updata=async(req,res)=>{
   try {
      const {id}= req.params
      const updata=await Worker.findByIdAndUpdate(id,req.body,{new:true})

      if(!updata){
         res.status(404).json({msg:"Datas Not Found"})
      }
   res.status(200).json({msg:"Datas Updated Successfully",updated:updata})
   } catch (error) {
      res.status(500).json({msg:"Server Error"})
   }
} 

// delete data

const deldata=async(req,res)=>{
   try {
      const {id}=params
      const deldata=await Worker.findByIdAndDelete(id,req.body,{new:true})
      if(!deldata){
         res.status(404).json({msg:"Data Not Found"})
      }
      res.status(200).json({msg:"Data Deleted Successfully",deleted:deldata})
   } catch (error) {
      res.status(500).json({msg:"Server Error"})
   }
}

module.exports={login,createworker,getdata,updata,deldata}