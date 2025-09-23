import { create } from "zustand";
export const useStore = create((set) => ({
  profile: null,
  isLoggedIn: false,
  setProfile: (profile: any) => set({ profile }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));
