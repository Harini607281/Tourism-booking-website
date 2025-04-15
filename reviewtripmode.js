const mongoose=require("mongoose");
const tripreview=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     mobile:{
        type:String,
        required:true
     },
     writereview:{
      type:String,
      required:true
     },
     destination:{
        type:String,
        required:true

     }
})
module.exports=mongoose.model("tripreview",tripreview)