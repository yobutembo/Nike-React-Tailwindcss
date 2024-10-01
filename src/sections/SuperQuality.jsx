import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../Components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
   
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg-max-w-lg">
        we provide you
      <span className="text-coral-red"> super</span><br />
      <span className="text-coral-red">  quality</span> Shoes</h2>
        
      
     
      
      <p className="mt-4 lg:max-w-lg info-text ">
        Ensuring premium comfort and style, our meticulously crafted footwear
        is designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>
      <p className="mt-6 lg:max-w-lg info-text">
        Our dedication to detail and excellence 
        ensures your satisfaction.
      </p>
      <div className="mt-12">
      <Button
      label="View Details"
      />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8} alt="Shoe 8" 
        className="object-contain"
        width={570}
        height={522}
        />
      </div>
    </section>
  )
}

export default SuperQuality