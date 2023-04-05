import { tabMenus } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type NavMenuProps = {
  tab: string
}

const NavMenu = ({ tab }: NavMenuProps) => {
  return (
    <div className="flex justify-between items-start flex-nowrap max-w-[1450px] mx-auto px-[10px]">
      <div className="shrink-0 mx-[20px] my-[40px]">
        <Link href="" className="">
          <span className="text-[#6a6a6a] text-[11px] tracking-[.2em]">
            PRODUCTS
          </span>
        </Link>
        <ul className="p-0 m-0 mt-[20px]">
          {tabMenus[tab].products.map((product) => (
            <li
              key={product}
              className="hover:animate-pulse mb-[12px] text-[#1c1b1b] font-thin text-left leading-[1.5]"
            >
              <Link href="">{product}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="shrink-0 mx-[20px] my-[40px]">
        <Link href="" className="">
          <span className="text-[#6a6a6a] text-[11px] tracking-[.2em]">
            FEATURED
          </span>
        </Link>
        <ul className="p-0 m-0 mt-[20px]">
          {tabMenus[tab].featured.map((feature) => (
            <li
              key={feature}
              className="hover:animate-pulse mb-[12px] text-[#1c1b1b] font-thin text-left leading-[1.5]"
            >
              <Link href="">{feature}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Image retrieval */}
      <div className="w-[370px] min-w-[250px] shrink my-[20px] mx-[40px]">
        {tabMenus[tab].images.map((image) => (
          <Link key={image} href="">
            <div className="mt-[8px] mx-auto mb-[20px] w-full inline-block text-[#1c1b1b] uppercase align-top text-center tracking-[.2em]">
              <div className="overflow-hidden w-[370px] min-w-[250px] max-h-[396px] ">
                <Image
                  src={image}
                  width={0}
                  height={0}
                  alt="coming-soon"
                  sizes="100vw"
                  className="w-full h-auto mb-[10px] hover:scale-[125%] duration-[8s] "
                />
              </div>
              <p className="mb-0 text-[12px] font-semibold leading-[1.65] mt-[20px]">
                Coming Soon
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavMenu
