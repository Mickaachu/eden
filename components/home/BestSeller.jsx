import Image from "next/image"
import { Carousel } from ".."

import { Images } from "@/constants"

function BestSeller() {
  return (
    <div className="text-center py-20">
      <h2>Best Seller</h2>
      <p>Check out our best selling products</p>
      <div className="w-3/4 m-auto">
        <Carousel>
          <div className="" >
            <Image src={Images.placeholder} alt="product1" width={300} />
          </div>
          <div className="">
            <Image src={Images.placeholder} alt="product1" width={300} />
          </div>
          <div className="">
            <Image src={Images.placeholder} alt="product1" width={300} />
          </div>
          <div className="">
            <Image src={Images.placeholder} alt="product1" width={300} />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default BestSeller