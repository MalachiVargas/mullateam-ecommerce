'use client'
import React, { useState } from 'react'
import { Page } from 'framer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideImages, slideMobileImages } from '@/constants'
import Link from 'next/link'

const SlideShow = () => {
  const [current, setCurrent] = useState(0)
  const pages = [1, 2, 3, 4, 5]
  const indicatorSize = 10
  const indicatorPadding = 10
  const indicatorWidth = pages.length * indicatorSize
  const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding
  const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal
  const indicatorAlpha = 0.3

  return (
    <div>
      <div className="w-full h-[420px] sm:h-[620px] flex relative">
        <Page
          width={'100%'}
          height={'100%'}
          currentPage={current}
          onChangePage={(current, previous) => setCurrent(current)}
          style={{ zIndex: '1 !important' }}
        >
          {/* Slideshow */}
          {pages.map((index) => {
            return (
              <div key={index} className="w-full h-full pointer-events-none">
                <Image
                  src={slideImages[index - 1]}
                  fill
                  alt="coming-soon"
                  className=" hidden sm:block object-cover"
                />
                <Image
                  src={slideMobileImages[index - 1]}
                  fill
                  alt="coming-soon"
                  className="object-cover block sm:hidden"
                />
              </div>
            )
          })}
        </Page>
      </div>
      {/* Slideshow Indicators */}
      <div className="relative">
        {pages.map((index) => {
          return (
            <motion.div
              key={index}
              className="cursor-pointer mx-auto"
              style={{
                width: indicatorSize,
                height: indicatorSize,
                borderRadius: '50%',
                backgroundColor: '#1b1c1c',
                x: -indicatorWidthTotal / 2,
                position: 'absolute',
                top: `30px`,
                left: `calc(50% + ${index - 1} * ${
                  indicatorSize + indicatorPadding
                }px)`
              }}
              animate={{
                opacity: current === index - 1 ? 1 : indicatorAlpha
              }}
              onTap={() => setCurrent(index - 1)}
            />
          )
        })}
        {/* Shop Now Button */}
        <Link href="">
          <motion.button
            style={{
              left: `calc(50% + 1 * ${indicatorSize + indicatorPadding}px)`,
              x: -91
            }}
            className="bg-black uppercase text-white py-[14px] px-[28px] leading-normal absolute top-[-90px] z-[11]"
          >
            Shop Now
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default SlideShow
