const Worker=require('../models/workermodel')
const bcrypt = require('bcrypt')

const createworker=async (req,res) =>{
   const {fullname,email,mobileno,password}=req.body
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
            password:trupass
         })
         await newdata.save()
         res.status(200).json({msg:"Worker created Successfully",data:newdata})

   } catch (error) {
        res.status(400).json({msg:"Server Error"})
   }
}

module.exports={createworker}