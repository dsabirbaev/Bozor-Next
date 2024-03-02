


import { create } from 'zustand'

interface IModal {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void
}

const useModalStore = create<IModal>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));

export default useModalStore;