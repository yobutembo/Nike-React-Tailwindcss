import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = (props) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img 
        src={props.imgURL} alt="customer"
        className='rounded-full object-cover w-[120px] h-[120px]'  
        />
        <p className='info-text mt-6 max-w-sm text-center'>{props.feedback}</p>

        <div  className='mt-3 flex gap-2.5 justify-center items-center'>
            <img src={star} alt="rating" width={24} height={24} className='object-contain m-0' />
            <p className='text-slate-gray text-xl font-montserrat'>({props.rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{props.customerName}</h3>


    </div>
  )
}

export default ReviewCard