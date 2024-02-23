import Image from "next/image"
import { Images } from "@/constants"
function NewArrivals() {
  return (
    <div className="text-center py-9">
      <h2>New Arrivals</h2>
      <p>Check out our latest products</p>
      <div className="flex flex-col justify-center items-center gap-5 pt-5">
        <Image src={Images.placeholder} width={200}/>
        <Image src={Images.placeholder} width={200}/>
        <Image src={Images.placeholder} width={200}/>
        <Image src={Images.placeholder} width={200}/>
      </div>
    </div>
  )
}

export default NewArrivals