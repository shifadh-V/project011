const express=require('express')
const app=express()

const connectDb=require('./config/db')
connectDb()

const workerroute=require('./routes/workerroute') 

app.use(express.json())
app.use('/worker',workerroute)

const PORT=3000

app.listen(PORT,()=>{
    console.log("Server Running");
    
})
