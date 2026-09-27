import { create } from 'zustand'

export const useAuthStore = create((set,get) => ({
    authUser: null,
    isCheckingAuth: true,
    onlineUser : [],
    socket: null,

    checkAuth: async () =>{
        set({isCheckingAuth:true});
        try {
            
        } catch (error) {
            
        }
    }
}))