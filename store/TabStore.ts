import { tabs } from "@/constants"
import { create } from "zustand"

type TabStore = {
    sidebarIsOpen: boolean
    activeSideTab: string
    setSidebarIsOpen: (sidebarIsOpen: boolean) => void
    setActiveSideTab: (tab: string) => void
}
  
export const useTabStore = create<TabStore>((set) => ({
    sidebarIsOpen: false,
    activeSideTab: tabs[0],
    setSidebarIsOpen: (sidebarIsOpen: boolean) => set((state) => ({
        ...state,
        sidebarIsOpen,
    })),
    setActiveSideTab: (activeSideTab: string) => set((state) => ({
        ...state,
        activeSideTab
    }))
}))