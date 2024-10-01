import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"
import { shoes, statistics } from "../Constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"


const Hero = () => {

  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)

  return (
   <section 
   id="home" 
   className="flex flex-col justify-center min-h-screen gap-10 max-container w-full xl:flex-row"
   >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p 
      className="text-xl font-montserrat text-coral-red"
      >
        Our Summer Collection
      </p>
      <h1 className="mt-10 font-palanquin text-8xl
        max-sm:leading-[62px] 
        max-sm:text-[62px] font-bold">
        <span className="xl:bg-white pr-10
        xl:whitespace-nowrap relative max-lg:z-0 z-10"
        >
          The New Arrival
        </span>
      <br />
      <span className="text-coral-red mt-3 inline-block">
        Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
        Discover stylish Nike arrivals,
        quality comfort, and
        innovation for your
        active life.
      </p>
      <Button
      label="Shop Now"
      iconURL={arrowRight} 
      />
      <div 
      className="flex flex-wrap justify-start
       items-center w-full mt-20 gap-10 md:gap-16"
      >
        {statistics.map((stat) =>(
          <div key={stat.value}>
            <p className="text-3xl font-palanquin font-bold md:text-4xl">{stat.value}</p>
            <p className="leading-5 font-montserrat text-slate-gray md:leading-7">{stat.label}</p>
          </div>
        ) )}
      </div>
    </div>
    <div 
    className="flex justify-center items-center 
    relative flex-1 xl:min-h-screen max-xl:py-40 
    bg-primary bg-hero bg-cover bg-center">
      <img 
      src={bigShoeImage} 
      alt="Shoe Collection" 
      width={500} 
      height={400}
      className="object-contain relative z-10" />
      <div className="flex absolute -bottom-[-1%] sm:left-[10%] max-sm:px-6 gap-4 sm:gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.name}>
            <ShoeCard
            imgURL={shoe}
            changeBigShoeImage={(shoe)=>{setbigShoeImage(shoe)}}
            bigShoeImage={bigShoeImage}
             />
          </div>
        ))}
      </div>
    </div>
   </section>
  )
}

export default Hero