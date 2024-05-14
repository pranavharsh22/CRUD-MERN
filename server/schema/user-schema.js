const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String,

},{
    timestamps:true
});

const User=mongoose.model('user',userSchema)
module.exports=User