import express from "express"
import "dotenv/config"

import User from "./models/user.model.js"
import { connectDB } from "./lib/db.js"



const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB();
    console.log("Server is up and running on PORT :  ", PORT)
});