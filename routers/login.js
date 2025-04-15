const express=require("express");
const jwt=require("jsonwebtoken");
const appuser=require("/home/harini/Documents/coursepdfs/project2/appusermode.js")
const router=express.Router();
router.post('/login',async(req,res)=>{
    try
    {
        const{email,password}=req.body;
        const exists=await appuser.findOne({email});
         if(!exists)
         {
            return res.status(400).send("user not found");
         }
         if(exists.password!=password)
         {
            return res.status(400).send("password not matched");
         }
         let payload=
         {
            user:{
                id:exists.id
            }
         }
         jwt.sign(payload,'jWttoken',{expiresIn:3600000},(err,token)=>{
            if(err) throw err;
            return res.json({token})
         })

    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send("server error");
    }
})
module.exports=router