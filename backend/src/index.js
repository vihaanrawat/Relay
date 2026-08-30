import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"
import cors from "cors"

import "dotenv/config"

import fs from "fs"
import path from "path"

import { clerkMiddleware } from '@clerk/express'

import User from "./models/user.model.js"
import { connectDB } from "./lib/db.js"

const app = express()

const PORT = process.env.PORT
const FRONTEND_URL= process.env.FRONTEND_URL;


app.use(express.json())
app.use(cors({origin:FRONTEND_URL ,Credentials:true}))
app.use(clerkMiddleware())


app.get("/health",(req,res) =>{
    res.status(200).json({ok:true});
})

app.listen(PORT, () => {
    connectDB();
    console.log("Server is up and running on PORT :  ", PORT)
});

