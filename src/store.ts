import { create } from "zustand";

type State = {
  category: string;
  setCategory: (category: string) => void;
  responseText: string;
  setResponseText: (text: string) => void;
};

const useStore = create<State>((set) => ({
  category: "",
  setCategory: (category) => set({ category }),
  responseText: "",
  setResponseText: (text) => set({ responseText: text }),
}));

export default useStore;
