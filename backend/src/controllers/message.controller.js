import User from "../models/user.model.js"

export async function getUsersForSidebar(req, res) {
    try {
        const loggedInUserId = req.user._id
        
        const filteredUsers = await User.find({_id:{$ne : loggedInUserId}})
    } catch (error) {

    }

}