const mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
isAdmin:{
    type:Boolean,
    default:false

}
})
const User=mongoose.model("collections",schema);
module.exports=User;