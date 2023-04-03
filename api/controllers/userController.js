import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
import createError from "../utils/createError.js";
export const deleteUser = async (req,res,next) =>{
    const user  = await User.findById(req.params.id);
    
    j
        if(req.userId !== await User.findById(req.params.id).toString())
        {
            return next(createError(403,"You can only delete your account"))
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("delete successfull");
    
    
}