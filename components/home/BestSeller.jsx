import Image from "next/image"
import { Carousel } from ".."

import { Images } from "@/constants"

function BestSeller() {
  return (
    <div className="text-center py-10">
      <h2>Best Seller</h2>
      <p>Check out our best selling products</p>
      <div>
        <Carousel>
          <div>
            <Image src={Images.placeholder} width={300} height={300}/>
          </div>
          <div>
            <Image src={Images.placeholder} width={300} height={300}/>
          </div>
          <div>
            <Image src={Images.placeholder} width={300} height={300}/>
          </div>
          <div>
            <Image src={Images.placeholder} width={300} height={300}/>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default BestSeller