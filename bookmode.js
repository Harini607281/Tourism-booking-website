const express=require("express");
const mongoose=require("mongoose");
const bookuser=new mongoose.Schema({
      fullname:{
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
      destination:{
        type:String,
        required:true
      },
      monthslot:{
        type:String,
        required:true
      },
      days:{
        type:String,
        required:true
      }
})
module.exports=mongoose.model("bookuser",bookuser)