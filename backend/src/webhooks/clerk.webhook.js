import express from "express"
import User from "../models/user.model.js"
import {verifyWebhook} from "@clerk/backend/webhooks"

const router = express.Router()

export default router