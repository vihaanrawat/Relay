import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import { useAuthStore } from "./useAuthStore"

export const useChatStore = create((set, get) => ({
    users: [],
    conversations: [],
    messages: [],
    selectedUser: null,
    isConversationsloading: false,
    isUsersLoading: false,
    isMessagesLoading: false,
    activeConversationsId: null,
    searchQuery: "",
    sidebarTab: "chats",
    composerText: "",
    isSoundEnables: true,
    

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set((state) => ({
                users: res.data,
                selectedUser:
                    state.selectedUser && res.data.some((user) => user._id === state.selectedUser._id)
                        ? state.selectedUser
                        : null,
            }));
        } catch (error) {
            console.log("Error in get Users", error.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },
}))