import mongoose from "mongoose"

async function connectDb() {
    try {
        const mongoUri = process.env.MONGODB_URI

        if(!mongoUri){
            throw new Error("MONGODB_URI is required")
            

        }
    } catch (error) {
        
    }
    
}