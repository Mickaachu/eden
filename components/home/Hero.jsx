import { Button } from ".."
function Hero() {
  return (
    <div className="bg-hero-image w-screen h-[80vh] bg-center bg-cover relative ">
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <div className="z-10 relative text-center flex justify-center items-center flex-col h-full">
        <h1 className="text-white">Lorem Ipsum dolor</h1>
        <p className="text-white">Lorem Ipsum dolor sit sample </p>
        <Button type="primary">Shop Now</Button>
      </div>  
    </div> 
  )
}

export default Hero