'use client'
import Image from "next/image"
import {useState} from "react"
import Link from "next/link"
import { Icons, Images } from "@/constants"
function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <header className="flex flex-col lg:flex-row justify-center items-center w-full md:px-[70px] bg-[#BCECAC] py-3">
      <div className=" md:w-[20%]">
        <Image src={Images.logo} width={160} alt="eden's logo" />
      </div>
      <div className="flex md:flex-col md:w-[90%] py-[30px] gap-5">
        <div className="gap-20 self-end hidden md:flex">
          <Link href="/">
            Home
          </Link>
          <Link href="/">
            About
          </Link>
          <Link href="/">
            Shop
          </Link>
          <Link href="/">
            Login | Sign-up
          </Link>
        </div>

        <div>
            <label htmlFor="search" className="flex border border-black p-[2px] max-w-2xl">
              <Image src={Icons.search} className="w-[25px]" />
              <input type="text" name="search" className="w-[70%] bg-inherit" />
            </label>
        </div>
        <div className="md:hidden">
          <Image src={Icons.menu} width={30} height={30} onClick={handleMenu}/>
        </div>
      </div>
       {
        showMenu && (
          <div className="bg-white flex flex-col fixed z-50 top-0 bottom-0 left-0   right-0 h-full w-full">
            <div className="self-end p-3">
              <Image src={Icons.close} width={30} height={30} onClick={handleMenu} />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center h-full">
              <Link href="/" onClick={handleMenu}>
                Home
              </Link>
              <Link href="/" onClick={handleMenu}>
                About
              </Link>
              <Link href="/" onClick={handleMenu}>
                Shop
              </Link>
              <Link href="/" onClick={handleMenu}>
                Login | Sign-up
              </Link>
            </div>
          </div>
        )
       }
    </header>
   
    
  )
}

export default Header