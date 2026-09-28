import {create} from "zustand"
import {axiosInstance} from "../lib/axios"
import { useAuthStore } from "./useAuthStore"

export const useChatStore = create((set,get) => ({
    users:[],
    conversations: [],
    messages: [],
    selectedUser : null,
    isConversationsloading: false,
    isUsersLoading: false,
    isMessagesLoading:false,
    active
}))