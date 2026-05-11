const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
        fullname:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        mobileno:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
        
},{timestamps})

const User=mongoose.model('user',userschema)
module.exports=User