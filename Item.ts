import { create } from "zustand";
export const useItems = create((set) => ({
  recent_items: [],
  recent_items_loading: false,
  setRecentItems: (recent_items: any) => set({ recent_items }),
  setRecentItemsLoading: (recent_items_loading: boolean) =>
    set({ recent_items_loading }),
}));
