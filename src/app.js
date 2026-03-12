

const express=require("express");
const app=express();

app.use("/",(req,res)=>{
   res.send("Hello from the Server")
})
app.use("/test",(req,res)=>{
    res.send("hello Test")
})
app.listen(3333,()=>{
    console.log("Server is Sucesfully  Listening on port 3333...")
})
