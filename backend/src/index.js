import express from "express"
import "dotenv/config"
import { connectDb } from "./lib/db";

const app = express()
const PORT = process.env.PORT



app.listen(PORT, () => {
    connectDb();
    console.log("Server is up and running on PORT :  ", PORT)
});