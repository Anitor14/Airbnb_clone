import { create } from "zustand";

type LoginModalStore = {
  isOPen: boolean;
  onOPen: () => void;
  onClose: () => void;
};

const useLoginModal = create<LoginModalStore>((set) => ({
  isOPen: false,
  onOPen: () => set({ isOPen: true }),
  onClose: () => set({ isOPen: false }),
}));

export default useLoginModal;
