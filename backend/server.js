const express=require('express')
const app=express()

const connectDb=require('./config/db')

connectDb()
const PORT=3000
app.listen(PORT,()=>{
    console.log("Server Running");
    
})
