'use client'

import { useEffect, useState } from 'react'
import { tabs } from '@/constants'
import {
  HiOutlineMenu,
  HiPhone,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineUser
} from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import NavMenu from './NavMenu'
import { useTabStore } from '@/store/TabStore'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const tabVariant = {
  active: {
    width: '100%',
    transition: {
      type: 'tween',
      duration: 0.4
    }
  },
  inactive: {
    width: 0,
    transition: {
      type: 'tween',
      duration: 0.4
    }
  }
}

const tabContentVariant = {
  active: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3
    },
    display: 'block'
  },
  inactive: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.4
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

const Navbar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState('')
  const { sidebarIsOpen, setSidebarIsOpen } = useTabStore((state) => ({
    sidebarIsOpen: state.sidebarIsOpen,
    setSidebarIsOpen: state.setSidebarIsOpen
  }))

  useEffect(() => {}, [activeTabIndex])

  const onNavHover = (index: string) => {
    setActiveTabIndex(index)
  }

  return (
    <div className="sticky lg:relative lg:z-[300]">
      <div className="w-[100%]">
        {/* Search bar hidden */}
        <div id="search"></div>
        {/* Main header bar */}

        <header className="bg-white text-[#1c1b1b] border-b shadow-[0_-1px_rgba(#dddddd)] ">
          <div className="flex items-center justify-between py-[15px] sm:py-[11px] px-[19px] sm:px-[50px]">
            {/* Left Side Navigation */}
            <div className="flex justify-center items-center">
              {/* Hamburger menu */}
              <button
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                className="inline-block lg:hidden leading-[1] relative p-0 border-none rounded-none"
              >
                <span>
                  <HiOutlineMenu className="align-middle h-7 w-7 sm:h-9 sm:w-9 " />
                </span>
              </button>
              {/* Desktop navigation bar */}
              <nav className="hidden lg:block mr-[45px]">
                <ul className="flex gap-12 list-none p-0">
                  {tabs.map((tab) => (
                    <motion.li
                      key={tab}
                      onHoverStart={() => onNavHover(tab)}
                      onHoverEnd={() => onNavHover('')}
                      className="z-0"
                    >
                      <button
                        className={classNames(
                          'relative tracking-[0.2em] leading-[1.25] text-[16px] font-medium uppercase',
                          'my-[6px]'
                        )}
                      >
                        {tab} ▼ {/* Underline Animation */}
                        <motion.div
                          animate={
                            activeTabIndex === tab ? 'active' : 'inactive'
                          }
                          variants={tabVariant}
                          className="absolute bottom-[-22px] left-0 h-[2px] bg-[#1c1b1b] origin-left"
                        />
                      </button>

                      {/* NavMenu Animation */}
                      <AnimatePresence initial={false}>
                        <motion.div
                          animate={
                            activeTabIndex === tab ? 'active' : 'inactive'
                          }
                          variants={tabContentVariant}
                          className="z-[-1] hidden text-left py-[20px] left-0 top-[62px] absolute h-[600px] w-full bg-white border-y shadow-[0_-1px_rgba(#dddddd)]"
                        >
                          <NavMenu tab={tab} />
                        </motion.div>
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Logo header */}
            <div className="flex grow justify-center items-center ml-[20px] sm:ml-[100px] lg:ml-[20px]">
              <h1 className="relative">
                <Link href="/" className="text-center ">
                  <Image
                    src="/mullateam-title-logo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="mullateam-clothing-logo"
                    className="w-full h-auto border-none mx-auto my-0 max-w-[200px] sm:max-w-[400px]"
                  />
                </Link>
              </h1>
            </div>
            {/* Call, Search, Users, ShoppingCart Icons */}
            <div className="flex items-center justify-end">
              {/* Call Icon */}
              <button className="leading-[1] inline-block">
                <span>
                  <HiPhone className="leading-[1] inline-block w-6 h-6 sm:w-7 sm:h-7" />
                </span>
              </button>
              {/* Users Icon */}
              <button className="hidden leading-[1] sm:inline-block ml-[9px] sm:ml-[15px]">
                <HiOutlineUser className="w-7 h-7 sm:w-7 sm:h-7" />
              </button>
              {/* Search Icon */}
              <button className="leading-[1] inline-block ml-[9px] sm:ml-[15px]">
                <span>
                  <HiOutlineSearch className="w-6 h-6 sm:w-7 sm:h-7" />
                </span>
              </button>
              {/* ShoppingCart Icon */}
              <button className="leading-[1] inline-block ml-[9px] sm:ml-[15px]">
                <span>
                  <HiOutlineShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Navbar
