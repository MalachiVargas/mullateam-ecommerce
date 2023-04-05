import Image from 'next/image'
import React from 'react'

const Logo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="/moneybag-modern.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
