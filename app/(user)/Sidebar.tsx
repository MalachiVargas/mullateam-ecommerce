import { tabMenus, tabs } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiX } from 'react-icons/hi'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { useTabStore } from '@/store/TabStore'

const sidebarVariant = {
  active: {
    transition: {
      type: 'tween',
      duration: 0.7
    },
    width: '82%'
  },
  inactive: {
    transition: {
      type: 'tween',
      duration: 0.7
    },
    width: 0
  }
}

const Sidebar = () => {
  const { sidebarIsOpen, setSidebarIsOpen, activeSideTab, setActiveSideTab } =
    useTabStore((state) => ({
      sidebarIsOpen: state.sidebarIsOpen,
      activeSideTab: state.activeSideTab,
      setActiveSideTab: state.setActiveSideTab,
      setSidebarIsOpen: state.setSidebarIsOpen
    }))
  return (
    <div className="">
      {/* Sidebar component */}
      <AnimatePresence initial={false}>
        {sidebarIsOpen && (
          <div>
            <motion.div
              animate="active"
              exit="inactive"
              initial="inactive"
              variants={sidebarVariant}
              className="overflow-x-hidden absolute top-0 left-0 flex flex-col bg-[#1b1c1c] font-semibold tracking-[.2em] uppercase text-white z-[10] h-full overflow-y-scroll"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: 20,
                  transition: {
                    type: 'tween',
                    duration: 0.3,
                    delay: 0.3
                  }
                }}
                exit={{ opacity: 0 }}
                className="mt-[20px] inline-block lg:hidden leading-[1] relative p-0 border-none rounded-none"
              >
                <span>
                  <HiX className="align-middle h-7 w-7 sm:h-9 sm:w-9 " />
                </span>
              </motion.button>
              {/* Sidbar navigation */}
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    type: 'tween',
                    duration: 0.3,
                    delay: 0.3
                  }
                }}
                exit={{ opacity: 0 }}
                className="flex flex-col whitespace-nowrap flex-1 pt-4 pb-4"
              >
                {/* Sidebar Tab Buttons */}
                <div className="flex items-center justify-evenly pb-4">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      onClick={() => setActiveSideTab(tab)}
                      className="flex-col items-center justify-center flex-1"
                    >
                      <div
                        className={`text-center items-center text-[14px] mb-4`}
                      >
                        {tab}
                      </div>
                      <div
                        className={`h-1 bg-white w-full ${
                          activeSideTab === tab ? 'opacity-75' : 'opacity-20'
                        }`}
                      />
                    </div>
                  ))}
                </div>
                {/* Sidebar Menu */}
                <div className="">
                  <div>
                    {tabMenus[activeSideTab].featured.map((feature) => (
                      <Link
                        key={feature}
                        className="flex items-center justify-between px-6 py-4 text-sm"
                        href=""
                      >
                        <span>{feature}</span>
                      </Link>
                    ))}

                    {tabMenus[activeSideTab].products.map((product) => (
                      <Link
                        key={product}
                        className="flex items-center justify-between px-6 py-4 text-sm"
                        href=""
                      >
                        <span>{product}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Sidebar Image Nav */}
                <div className="pt-4 px-6">
                  {tabMenus[activeSideTab].images.map((image) => (
                    <Link key={image} href="">
                      <div className="mx-auto w-full max-w-[360px] inline-block uppercase align-top tracking-[.2em]">
                        <div className="min-w-[250px] pb-4">
                          <Image
                            src={image}
                            width={0}
                            height={0}
                            alt="coming-soon"
                            sizes="100vw"
                            className="w-full h-auto  "
                          />
                        </div>
                        <p className="mb-0 text-[14px] font-semibold leading-[1.65]">
                          Coming Soon
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
              {/* Social Media Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,

                  transition: {
                    type: 'tween',
                    duration: 0.3,
                    delay: 0.3
                  }
                }}
                exit={{ opacity: 0 }}
                className="border-t flex justify-evenly p-4"
              >
                <Link href="">
                  <FaTwitter className="align-middle h-6 w-6 " />
                </Link>
                <Link href="">
                  <FaTiktok className="align-middle h-6 w-6 " />
                </Link>
                <Link href="">
                  <FaInstagram className="align-middle h-6 w-6 " />
                </Link>
              </motion.div>
            </motion.div>
            {/* Transparent Fade in background*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.2
              }}
              exit={{
                opacity: 0
              }}
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              transition={{ type: 'spring', bounce: 0, duration: 0.7 }}
              className="z-[5] bg-black absolute h-full w-full top-0 left-0"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Sidebar
