

import { create } from 'zustand'

interface IModal {
    isLogin: boolean,
    closeLogin: () => void,
    openLogin: () => void,
}

const useAuthStore = create<IModal>((set) => ({
    isLogin: false,
    closeLogin: () => set((state) => ({ isLogin: false})),
    openLogin: () => set((state) => ({ isLogin: true}))
}));


export { useAuthStore }