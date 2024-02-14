import { create } from "zustand";

type RentModalStore = {
  isOPen: boolean;
  onOPen: () => void;
  onClose: () => void;
};

const useRentModal = create<RentModalStore>((set) => ({
  isOPen: false,
  onOPen: () => set({ isOPen: true }),
  onClose: () => set({ isOPen: false }),
}));

export default useRentModal;
