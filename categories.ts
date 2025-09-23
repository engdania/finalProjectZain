import { create } from "zustand";
export const useCategories = create((set) => ({
  categories: [],
  setCategories: (categories: any) => set({ categories }),
}));
