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
app.listen(process.env.PORT,()=>{
    console.log(`listening to port number ${process.env.PORT}`)
});