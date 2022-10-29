const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  "Name": { required: true, type: String },
  "Email":{required:true,type:String},
  "Mobile Number":{required:true,type:String},
  "Age": { required: true, type: Number }
},{timestamps:true});




module.exports=mongoose.model("users",dataSchema)