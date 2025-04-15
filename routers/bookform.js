const express=require("express");
const bookuser=require("../bookmode.js");
const middleware=require("../middleware");
const router=express.Router();
router.post('/bookform',middleware,async(req,res)=>{
    try{
            const{fullname,email,mobile,destination,monthslot,days}=req.body;
            let bookingconfirmed=new bookuser({
                fullname,
                email,
                mobile,
                destination,
                monthslot,
                days

            })
            await bookingconfirmed.save();
            return res.status(200).send("user succesfully booked")
       }

    catch(err)
    {
        console.log(err)
        return res.status(500).send("server error")
    }
   

})
module.exports=router;