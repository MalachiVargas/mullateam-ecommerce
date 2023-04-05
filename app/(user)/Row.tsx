'use client'
import { tabs } from '@/constants'
import { useTabStore } from '@/store/TabStore'
import React from 'react'


const Row = () => {
  const { sidebarIsOpen, setSidebarIsOpen, setActiveSideTab } =
  useTabStore((state) => ({
    sidebarIsOpen: state.sidebarIsOpen,
    setActiveSideTab: state.setActiveSideTab,
    setSidebarIsOpen: state.setSidebarIsOpen
  }))
  const handleSidebarAction = (tab: string) => {
    setSidebarIsOpen(!sidebarIsOpen)
    setActiveSideTab(tab)
  }
  return (
    <div className="flex bg-[#efefef] sm:hidden">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => handleSidebarAction(tab)}
          className="text-center border-r border-solid border-[#cccccc] flex-[50%] p-[10px] h-auto"
        >
          <span className="text-[16px] font-medium inline-block relative py-[14px] px-[28px] leading-normal uppercase tracking-[.2em] text-center">
            {tab}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Row
