import mongoose from "mongoose"

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI

        if(!mongoUri){
            throw new Error("MONGODB_URI is required")
        
        }
        const conn = await mongoose.connect(mongoUri)
        console.log("MongoDB connected",conn.connection.host)

    } catch (error) {
        console.error("MongoDB connection error:",error.message);
        process.exit(1)
        //1 means failed , 0 means success

    }
    
}