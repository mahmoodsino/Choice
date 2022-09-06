import React from 'react'
import { TruckIcon } from '../../../icons'
import {ProgressLine} from '../../../steper'

const Delivered = () => {
  return (
    <div className=' bg-gray-1350 border border-[#C4C4C4]/50 '>
        <div className='flex flex-col sm:p-4 md:p-7'>
            <div className='space-x-1 flex items-center'>
                <TruckIcon className='fill-blue-950 w-7' />
                <h1 className='text-green-1100 mt-1'>Delivered</h1>

            </div>
            <ProgressLine progressPercentage={100}/>
        </div>
        <div className='md:mx-7 sm:mx-4 border-b pb-7 '>
            <span className='text-gray-1650'>Delivered on</span>
            <span className='text-gray-1700'> Fri, May 16, 2022, 5:00 p.m.</span>
        </div>
        <div className='md:pl-7 sm:pl-4 mt-5 pb-10 md:text-lg'>
            <h1 className='text-gray-1700 font-medium'>Delivery Address</h1>
            <h1 className='text-gray-1650'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </div>
    </div>
  )
}

export default Delivered
