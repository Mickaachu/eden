import Image from "next/image"
import Link from "next/link"
import { Icons, Images } from "@/constants"
function Header() {
  return (
    <header className="flex w-full px-[70px] bg-[#BCECAC]">
      <div className="w-[20%]">
        <Image src={Images.logo} width={160} alt="eden's logo" />
      </div>
      <div className="flex flex-col w-[90%] py-[30px] gap-5">
        <div className="flex gap-20 self-end">
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
              <input type="text" name="search" className="w-full bg-inherit" />
            </label>
        </div>
      </div>
    </header>
  )
}

export default Header