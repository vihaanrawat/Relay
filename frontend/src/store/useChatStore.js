import { create } from "zustand"
import {persist} from "zustand/middleware"
import { axiosInstance } from "../lib/axios"
import { useAuthStore } from "./useAuthStore"
import toast from "react-hot-toast"


//todo : persist
export const useChatStore = create(persist())