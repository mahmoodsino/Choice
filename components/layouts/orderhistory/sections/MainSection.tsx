import React from 'react'
import { OrderReview } from '../../../orderReview'
import Delivered from './Delivered'
import ShipmentSummary from './ShipmentSummary'

const MainSection = () => {
  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
      <div className='flex justify-between  mb-10'>
            <span className='font-medium block '>Order History</span>
            <div className='border h-0 mt-3.5 border-yellow-950 w-[90%]'>
            </div>
        </div>

        <div className='md:mx-10 flex sm:flex-col lg:flex-row justify-between mt-10'>

        <span className='md:text-[22px] sm:text-lg text-gray-1500 font-bold'>Shipment Details</span>
        <div className='space-x-5 text-gray-1200 md:text-lg '>
                <span>Order No: 123456789</span>
                <span>Order Date: Thu, May 15, 2022</span>
        </div>
      </div>
        <div className='mt-10'>
            <div className='lg:w-[85%] md:w-[90%] sm:w-[100%] left-0 right-0 m-auto'>
                <Delivered />
                <h1 className='my-5 ml-4 text-lg  text-gray-1700 font-medium'>3 Items</h1>
                <div className='w-[100%] space-y-14'>
                    <OrderReview gridForLargScreen='grid-cols-2' />
                    <ShipmentSummary />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection
