const express=require("express");
const middleware=require("/home/harini/Documents/coursepdfs/project2/middleware.js");
const tripreview=require("/home/harini/Documents/coursepdfs/project2/reviewtripmode.js")
const router=express.Router();
router.get('/allreviews',middleware,async(req,res)=>{
    try{
          let allreviews=await tripreview.find();
          return res.json(allreviews);

    }
    catch(err)
    {
        return res.status(500).send("server error");
    }
})
module.exports=router;