import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import { uploadChatMedia } from "../lib/imagekit.js"

export async function getUsersForSidebar(req, res) {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-clerkId")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message)
        res.status(500).json({ message: "Internal server error" })

    }

}

export async function getConversationsForSidebar(req, res) {
    try {
        const loggedInUserId = req.user._id

        const conversations = await Message.aggregate([
            // 1. Keep only the messages I sent or received.
            { $match: { $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }] } },

            // 2. Collapse them into one row per chat partner, noting our latest message time.
            {
                $group: {
                    // The partner is the other person on the message (not me).
                    _id: { $cond: [{ $eq: ["$senderId", loggedInUserId] }, "$receiverId", "$senderId"] },
                    lastMessageAt: { $max: "$createdAt" },
                },
            },
            // 3. Put the most recent conversation at the top.
            { $sort: { lastMessageAt: -1 } },

            // 4. Look up each partner's user profile (comes back as an array).
            { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },

            // 5. Pull that profile out of the array and make it the document.
            { $replaceRoot: { newRoot: { $first: "$user" } } },

            // 6. Hide the private clerkId field from the result.
            { $project: { clerkId: 0 } },

        ]);

        res.status(200).json(conversations)
    } catch (error) {
        console.error("Error in getConversationsForSidebar:", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function getMessages(req, res) {
    try {
        const { id: userToChatId } = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or: [
                { senderId: myId, recieverId: userToChatId },
                { senderId: userToChatId, recieverId: myId },

            ]
        }).sort({ createdAt: 1 })

        res.status(200).json(messages)
    } catch (error) {
        console.error("Error in getMessages:", error.message)
        res.status(500).json({ message: "Internal server error" })

    }
}

export async function sendMessage(req, res) {
    try {
        const { text } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let imageUrl;
        let videoUrl;

        if(req.file){
            if(!hasImageKitConfig()){
                return res.status(500).json({message:"Media upload is not configured"})
            }

            const url = await uploadChatMedia(req.file)
            if(req.file.mimetype.startsWith("video/")) videoUrl = url;
            else{
                imageUrl = url
            }
        }


    } catch (error) {

    }

}