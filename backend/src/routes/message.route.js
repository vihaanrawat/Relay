import express from "express";
import {
    getConversationsForSidebar,
    getUsersForSidebar,
    getMessages,
} from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router()

router.use(protectRoute)

router.get("/users",getUsersForSidebar)
router.get("/conversations" ,getConversationsForSidebar)
router.get("/:id",getMessages)
router.post("/send/:id",upload,sendMessage)



export default router