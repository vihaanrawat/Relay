import express from "express"

const router = express.Router();

router.get("/check",checkAuth)

export default router