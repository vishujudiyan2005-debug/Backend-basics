import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req,res)=>{
    // take details from frontend ------> req.body me data ata hai
    // validate the inputes ----> empty or not
    // check if user already existed
    // upload the images temprorily on local server also check if  the requied image is uploaded or not 
    // upload tem to cloudinary
    // check if required files/images are uploaded on cloudinary
    // make a user object ---> create entries in database
    // check if user is created on db
    // remove password and refresh token from the response

    const {username , email , fullname, password } =  req.body

    if([username , email , fullname , password].some(
        (field) => field?.trim()=== ""   // trim to remove the white spaces in beginning and end
    )){
        throw new ApiError(400, "All fields required")
    }

    const existedUser = await User.findOne(
    {
        $or : [{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409, "User with same username or email already exited")
    }

//    const profilePicLocalPath=  req.files?.profilePic[0]?.path

//    if(!profilePicLocalPath){
//     throw new ApiError(409,"Profile Picture required")
//    }
//   const profilePic = await uploadOnCloudinary(profilePicLocalPath)
//     if(!profilePic){
//      throw new ApiError(409,"Profile Picture required")
//     }  

    const user = await User.create({
        fullname,
        email,
        username : username.toLowerCase(),
        password,
        // profilePic : profilePic?.url || ""

    })
    


    const createdUser = await User.findById(user._id).select(
        "-password -refreshtoken"
    )
    
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    
    return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully"))
})

export {registerUser}