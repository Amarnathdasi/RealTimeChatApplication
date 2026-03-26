

const express=require("express");

const connectDb=require("./config/database.js")

const User = require("./models/user.js");
const app=express();
app.use(express.json());
app.post("/signup",async(req,res)=>{
   const user=new User(req.body)
   try{
      await user.save();
      res.send("User Added Successfully")
   }catch(err){
        res.status(400).send("Error Saving the user"+err.message)
   }

})
app.get("/user", async (req, res) => {
    const { emailId } = req.body; // destructuring

    try {
        const userData = await User.findOne({ emailId: emailId });

        console.log(userData);
        res.send(userData);
    } catch (err) {
        res.status(400).send("Error Finding User " + err.message);
    }
});

connectDb().then(()=>{
    console.log("DataBase Connection Established.....")
    app.listen(3333,()=>{
    console.log("Server is Sucesfully  Listening on port 3333...")
})
}).catch((err)=>{
     console.error("DataBase Connection Failed.....")
})


