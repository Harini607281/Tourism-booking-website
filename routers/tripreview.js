const express=require("express");
const middleware=require("/home/harini/Documents/coursepdfs/project2/middleware.js")
const tripreview=require("/home/harini/Documents/coursepdfs/project2/reviewtripmode.js")
const bookuser=require("//home/harini/Documents/coursepdfs/project2/bookmode.js")
const router=express.Router();
router.post('/addreview',middleware,async(req,res)=>{
    try
    {
       const{name,email,mobile,writereview,destination}=req.body;
       const exists=await bookuser.findOne({email});
       if(!exists)
       {
        return res.status(400).send("email not found")
       }
       const tripreivewadd=new tripreview({
        name,
        email,
        mobile,
        writereview,
        destination
       })
       await tripreivewadd.save();
       return res.status(200).send("review added succesfully")
    }
    catch(err)
    {
        return res.status(500).send("server error")
    }
    
})
module.exports=router;