import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"
import "dotenv/config"

import { clerkMiddleware } from '@clerk/express'

import User from "./models/user.model.js"
import { connectDB } from "./lib/db.js"

const app = express()
const PORT = process.env.PORT

app.use(clerkMiddleware())

app.get("/health",(req,res) =>{
    res.status(200).json({ok:true});
})

app.listen(PORT, () => {
    connectDB();
    console.log("Server is up and running on PORT :  ", PORT)
});

