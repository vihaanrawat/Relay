import User from "../models/user.model.js"
import Message from "../models/message.model.js"

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

        ]);
    } catch (error) {

    }
}