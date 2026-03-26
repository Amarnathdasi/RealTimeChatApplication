const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:25,
    },
    lastName:{
        type:String,
    },
    age:{
        type:Number,
        Min:18,
       
    },
    emailId:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
    },
    gender:{
        type:String,
        validate(value){
          if(!["male","female","others"].includes(value)){
            throw new Error("Gender data is not valid")
          }
        }
        
    }

},{
    timestamps:true,
}
)

const User=mongoose.model("User",UserSchema)
module.exports=User