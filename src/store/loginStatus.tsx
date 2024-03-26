import { create } from 'zustand'
import { persist } from "zustand/middleware";

interface LoginState {
    isLogged: boolean
    logout: () => void
    login: () => void
}

const useLoginStore = create<LoginState>()(
    persist(
        (set) => ({
            isLogged: false,
            logout: () => set({ isLogged: false }),
            login: () => set({ isLogged: true }),
        }),
        {
            name: "login-storage",
        }
    )
)

export default useLoginStore