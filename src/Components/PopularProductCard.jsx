
import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price,old_price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="Rating" w={24} height={24} />
            <p className="font-montserrat text-xl text-slate-gray leading-normal">({rating})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 text-xl text-slate-gray leading-normal line-through">{old_price}</p>
        <p className="mt-2 font-montserrat text-coral-red text-2xl font-semibold">{price}</p>
    </div>
  )
}

export default PopularProductCard