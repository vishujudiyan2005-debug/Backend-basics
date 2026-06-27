import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique : true
    },
     email:{
        type: String,
        required: true,
        unique : true,
        lowercase: true
    },
     password:{
        type: String,
        required: true,
        unique : true
    },
    role:{
        type:String,

    },
    gender:{
        type:String,
        enum: ["Male","Female","Other"] //------> inme se hi hona chahiye restrictions lga di humne
    }


},{timeStamps:true})

export const User = mongoose.model('User', userSchema)