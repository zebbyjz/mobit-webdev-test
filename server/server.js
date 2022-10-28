const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const routes=require('./routes/routes');




require('dotenv').config();
const mongoString=process.env.DATABASE_URL;
mongoose.connect(mongoString);



const app = express();
app.use(cors());
app.use(express.json())
app.use('/api',routes)
app.listen(5000, () => console.log("Running on 5000"));




const database=mongoose.connection;
database.on("error",(error)=>{
    console.log(error)
})
database.once('connected',()=>(console.log("Successfully connected to Atlas")));
