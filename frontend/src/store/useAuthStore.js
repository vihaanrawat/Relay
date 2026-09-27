import { create } from 'zustand'
import { axiosInstance } from '../lib/axios';
import {connect, io} from "socket.io-client"

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000": "/";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUser: res.data })
        } catch (error) {
            console.error("Error in checkAuth", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    clearAuth: () => {
        set({
            authUser: null,
            isCheckingAuth: false,
            onlineUsers: []
        });
    },
    connectSocket: (user) => {
        if(!user || get().socket?.connected) return

        const socket = io(BASE_URL, {query:{userId : user._id}})
    }
}))