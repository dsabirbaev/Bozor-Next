


import { create } from 'zustand'

interface IModal {
    isOpen: boolean,
    toggleModal: () => void
}

const useModalStore = create<IModal>((set) => ({
    isOpen: false,
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));


const useModalStoreVerify = create<IModal>((set) => ({
    isOpen: true,
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));


const useModalStoreExit = create<IModal>((set) => ({
    isOpen: false,
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));


export { useModalStore, useModalStoreVerify, useModalStoreExit }