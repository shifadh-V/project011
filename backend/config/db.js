const mongoose=require('mongoose')
require('dotenv').config()
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.moongo_URL)
        console.log("MongoDB Connected");
        
    } catch (error){
        console.log("Connetion Error",error);   
    }
}

module.exports=connectDb