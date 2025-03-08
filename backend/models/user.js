const mongoose=require('mongoose');
const User=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
    },
    resume:{
        type:String,
    },
    subject:{
        type:String,
        default:"maths"
    },
    about:{
        type:String,
    }

});

module.exports=mongoose.model("user",User);