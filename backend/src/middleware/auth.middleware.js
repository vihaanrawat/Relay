import { getAuth } from "@clerk/express";
import User from "../models/user.model";

export async function protectRoute(req, res, next) {
    try {
        const {userId} = getAuth(req)
        if(!userId){
            res.status(401).json({message:"Unauthorized"});
            return;
        }
        const user = await User.findOne({clerkId:userId})

        if(!userId){
            res.status(401).json({message:"User profile is not synced yet"})
            return;
        }

        
    } catch (error) {
        
    }
}