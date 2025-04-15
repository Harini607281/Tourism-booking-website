const express=require("express");
const appuser=require("/home/harini/Documents/coursepdfs/project2/appusermode.js")
const router=express.Router();

router.post('/register',async(req,res)=>{
    try{
        console.log(req.body);
        const{fullname ,email,mobile,password,confirmpassword}=req.body;
        const exists=await appuser.findOne({email});
        if(exists)
        {
           return res.status(400).send("user already registered");
        }
        if(password!=confirmpassword)
        {
            return res.status(403).send("password not matched");
        }
        let newUser = new appuser({
            fullname,
            email,
            mobile,
            password,
            confirmpassword
        });
        await newUser.save();
        return res.status(200).send("user registered");


    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send("server error");
    }
    
})
module.exports=router;
