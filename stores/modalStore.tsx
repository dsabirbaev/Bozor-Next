


import { create } from 'zustand'

interface IModal {
    isOpen: boolean,
    toggleModal: () => void
}

const useModalStore = create<IModal>((set) => ({
    isOpen: false,
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useModalStore;