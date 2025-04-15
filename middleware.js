 const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
    try{
        let token=req.header("x-token");
        if(!token)
        {
            console.log(token)
            return res.status(400).send("token not found");
        }
        let decode=jwt.verify(token,'jWttoken');
        req.user=decode.user;
        next();
       
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send("server error")
    }
} 