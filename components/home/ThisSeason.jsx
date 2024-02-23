import Image from "next/image"

import { Button } from ".."
import { Images } from "@/constants"
function ThisSeason() {
  return (
    <div className="bg-[#BCECAC] py-10 flex flex-col justify-center items-center gap-3">
      <div>
        <h2>This Season</h2>
        <p>be ready to change</p>
        <Button type="secondary">Shop Now!</Button>
      </div>
      <div className="flex gap-2 overflow-hidden">
        <Image src={Images.placeholder} alt="this season" width={400} height={400} />
        <Image src={Images.placeholder} alt="this season" width={400} eight={400}/>
      </div>
    </div>
  )
}

export default ThisSeason