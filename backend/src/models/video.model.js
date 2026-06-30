import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({

    title:{
        type:String,
        required:true,

    },
    videoFile:{
        type:String, // cloudnary url
        required:true,

    },
    thumbnail:{
        type:String, // cloudnary url
        required:true,
    },
    description:{
        type:String, 
        
    },
    isPublic:{
        type:Boolean, 
        default: true
        
    },
    views:{
        type:Number, //--->cloudnary se data aaega
        default:0
    },
    
    likes:{
        type:Number, //--->cloudnary se data aaega
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
    

},{timestamps:true})

export const Video = mongoose.model("Video",videoSchema)