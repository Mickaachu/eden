import Image from "next/image"
import Link from "next/link"
import { Images } from "@/constants"
function Footer() {
  return (
    <div className="bg-[#3F7A3E] flex flex-col px-4 py-[30px] text-white gap-10 md:flex-row justify-center items-center md:gap-20">
      <div className="flex flex-col justify-center items-center">
        <Image src={Images.FooterLogo}/>
        <p className="max-w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque magna iaculis dignissim auctor. Vivamus et justo ex. Praesent mi libero, consectetur in molestie ut, vulputate non justo. Phasellus a malesuada quam. Quisque velit ex, blandit id tincidunt nec, semper a lectus. Mauris sed elit ac mi </p>
      </div>
      <div className="flex px-3 gap-10">
        <div className="flex flex-col">
          <p className="font-bold">Pages</p>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Shop</Link>
        </div>
        <div className="flex flex-col mt-6">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>

        </div>
      </div>
    </div>
  )
}

export default Footer