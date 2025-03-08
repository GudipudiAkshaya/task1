const express=require('express');
const app=express();
const dotenv=require('dotenv');
app.use(express.json());
dotenv.config();
const cors = require('cors');
app.use(cors());

require("./conn/conn.js");
const userRouter=require('./routes/user.js');
app.use('/api',userRouter);
app.listen(3000,()=>{
    console.log("listening to port number 3000")
});