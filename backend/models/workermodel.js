const mongoose=require('mongoose')
const workerschema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
    workname:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true})

const Worker=mongoose.model('worker',workerschema)
module.exports = Worker