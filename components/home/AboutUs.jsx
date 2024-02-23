import { Button } from ".."
function AboutUs() {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="text-center max-w-[800px] w-full  relative bg-about-image bg-cover bg-center h-[70vh] flex flex-col justify-center items-center rounded-[45px]">
        <div className="relative z-10">
          <p className="text-white">Lorem Ipsum dolor sit sample </p>
          <Button type="primary">Learn More</Button>
        </div>
        <div className="absolute w-full h-full bg-black opacity-60 rounded-[45px]"></div>
      </div>
    </div>
  )
}

export default AboutUs