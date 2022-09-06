import React from 'react'
import { CardReview } from '../card'

interface props {
    gridForLargScreen:string
}

const OrderReview = ({gridForLargScreen}:props) => {
  return (
    <div className='bg-gray-1350 border border-[#C4C4C4]/50 sm:px-2 md:pl-9 pb-10'>
        <h1 className="font-bold md:text-xl pt-5 pb-5  text-gray-1500 ">Order Review</h1>
        <div className={`grid lg:${gridForLargScreen} md:mx-4`}>
            <CardReview />
            <CardReview/>
            <CardReview />
        </div>
    </div>
  )
}

export default OrderReview
