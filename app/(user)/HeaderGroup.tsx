'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Row from './Row'
import ShippingBanner from './ShippingBanner'
import Sidebar from './Sidebar'

const HeaderGroup = () => {
  return (
    <div>
      <ShippingBanner />
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default HeaderGroup
