import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const userSchema = new Schema({

    username:{
        type : String,
        required:true,
        lowercase : [true, "username should be in lowercase only"],
        index : true //---> searching efficient bnata hai
    },
      email:{
        type : String,
        required:true,
        lowercase : true,
      },

   password:{
    type: String,
    required :[true,"Password Required"]
   },
   fullname:{
    type:String,
    required:true,
    index:true
   },
   profilePic:{
    type:String, // cloudnary url
    // required : true

   },
   watchHistory:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Video"
    }
   ],
   refreshtoken:{
    type: String
   }
    
},{timestamps:true})

userSchema.pre("save", async function () {
    if(! this.isModified("password")) return

    this.password = await bcrypt.hash(this.password,10)
    
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
       username:this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn :ACCESS_TOKEN_EXPIRY
    }
)}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn :REFRESH_TOKEN_EXPIRY 
    }
)}

export const User = mongoose.model("User",userSchema)