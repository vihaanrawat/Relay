import express from "express"
import http from "http"
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app)

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173"  

const io = new Server(server , {cors : {origin: [allowedOrigin]}})


//online users map = {userId: socketId}
const userSocketMap = {};


io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId

})