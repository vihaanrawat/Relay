import express from "express"
import "dotenv/config"

import User from "./models/user.model.js"



const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {

    console.log("Server is up and running on PORT :  ", PORT)
});