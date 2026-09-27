import { create } from 'zustand'
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set,get) => ({
    authUser: null,
    isCheckingAuth: true,
    onlineUser : [],
    socket: null,

    checkAuth: async () =>{
        set({isCheckingAuth:true});
        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        } catch (error) {
            
        }
    }
}))