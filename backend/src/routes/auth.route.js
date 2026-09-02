import express from "express"
import { checkAuth } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/check", protectRoute, checkAuth)

export default router