const express=require("express");
const mongoose=require("mongoose");
const register=require("./routers/register")
const login=require("./routers/login")
const bookform=require("./routers/bookform")
const tripreview=require("./routers/tripreview")
const reviewsu=require("./routers/reviewu")
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors({origin:'*'}));
mongoose.connect('mongodb+srv://root:root1234@cluster0.es2uh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(

    ()=>
    {
        console.log("db connected")
    }
)
 app.use('/',register);
 app.use('/',login);
 app.use('/',bookform);
 app.use('/',tripreview);
 app.use('/',reviewsu);
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(5002,(req,res)=>{
    console.log("server running");
})
