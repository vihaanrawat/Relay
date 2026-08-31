import express, { response } from "express"
import User from "../models/user.model.js"
import {verifyWebhook} from "@clerk/backend/webhooks"

const router = express.Router()

router.post("/",async(req,res)=>{
    const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET
    if(!signingSecret){
        req.status(503).json({message:"Webhook secret is not provided"})
        return;
    }
})

export default router