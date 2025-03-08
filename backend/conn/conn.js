const mongoose=require("mongoose");

const conn=async()=>{
    try{
     await mongoose.connect("mongodb+srv://gudipudiakshaya22:akshaya22,8,2005@cluster0.gfhvm.mongodb.net/task1");
     console.log("connected to data base hello");

    }
    catch(error){
     console.log("error")
    }
}
conn()