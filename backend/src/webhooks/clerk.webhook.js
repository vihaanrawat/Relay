import express, { response } from "express"
import User from "../models/user.model.js"
import { verifyWebhook } from "@clerk/backend/webhooks"

const router = express.Router()

router.post("/", async (req, res) => {
    const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET
    if (!signingSecret) {
        req.status(503).json({ message: "Webhook secret is not provided" })
        return;
    }

    // clerk's verifier expects a Web Request with the raw body; express.raw gives a Buffer.
    const payload = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : String(req.body);
    const request = new Request("http://internal/webhooks/clerk", {
        method: "POST",
        headers: new Headers(req.headers),
        body: payload,
    });
})

export default router