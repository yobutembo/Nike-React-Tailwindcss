import { products } from "../Constants"
import PopularProductCard from "../Components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12"> 
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className=" text-3xl md:text-4xl font-bold font-palanquin">
          Our 
          <span className="text-coral-red"> Popular</span> Products</h2>
          
        <p className="lg:max-w-lg text-slate-gray text-center font-montserrat">
          Experience top-notch quality in style
          with our sought-after collections.
          Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {products.map((product)=>(
        <PopularProductCard 
          key={product.name}
          {...product}
        />
      ))}
      </div>
    
    </section>
  )
}

export default PopularProducts