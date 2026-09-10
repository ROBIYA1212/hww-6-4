import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      names: [],

      addName: (name) =>
        set((state) => ({
          names: [...state.names, name],
        })),
    }),
    {
      name: "names-storage",
    }
  )
);