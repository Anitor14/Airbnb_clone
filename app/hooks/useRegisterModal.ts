import { create } from "zustand";

type RegisterModalStore = {
  isOPen: boolean;
  onOPen: () => void;
  onClose: () => void;
};

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOPen: false,
  onOPen: () => set({ isOPen: true }),
  onClose: () => set({ isOPen: false }),
}));

export default useRegisterModal;
