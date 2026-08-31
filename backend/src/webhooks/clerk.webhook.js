import express, { response } from "express"
import User from "../models/user.model.js"
import {verifyWebhook} from "@clerk/backend/webhooks"

const router = express.Router()

router.post("/",async(req,res)=>{
    
})

export default router