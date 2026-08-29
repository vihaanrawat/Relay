import express from "express"
import "dotenv/config"

import User from "./models/user.model.js"
import { connectDB } from "./lib/db.js"

const dns = require("dns")

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])



const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB();
    console.log("Server is up and running on PORT :  ", PORT)
});