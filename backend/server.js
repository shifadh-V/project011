const express=require('express')
const app=express()

const connectDb=require('../backend/config/db')
connectDb()

const workerroute=require('./routes/workerroute') 
const usercontroller=require('./routes/userroute')

app.use(express.json())
app.use('/worker',workerroute)
app.use('/user',usercontroller)

const PORT=3000

app.listen(PORT,()=>{
    console.log("Server Running");
    
})
