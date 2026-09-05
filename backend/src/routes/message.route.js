import express from "express";
import {
    getConversationsForSidebar,
    getUsersForSidebar,
    getMessages,
} from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router()

router.get("/users", protectRoute ,getUsersForSidebar)
router.get("/conversations", protectRoute ,getConversationsForSidebar)
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,getMessages)



export default router