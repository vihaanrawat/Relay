import express from "express"
import { checkAuth } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/check", protectRoute, checkAuth)

export default router