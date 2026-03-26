const mongoose=require("mongoose");
const connectDb=async()=>{
await mongoose.connect("mongodb+srv://NamasteNode:FySxcU4h4tJaWN7j@namastenode.utholx.mongodb.net/realTimeChatApplication")
}



module.exports=connectDb;