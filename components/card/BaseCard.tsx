import Image from 'next/image'
import React from 'react'
import download  from "../../public/assets/images/download.png"
import BaseButton from '../buttons/BaseButton'

const BaseCard = () => {
  return (
    <div className='pr-1'>

        <div className='border w-[100%]  '>
        <div>
          <div className='m-auto w-fit py-2 h-[140px] bg-contain'>
            <Image  src={download} alt="" />
          </div>
            <div className='mx-2'>
                <span className='block font-bold'>LubriMatic</span>
                <span className='block font-medium'>White Lithium Grease</span>
                <span className='text-gray-1050 text-lg font-semibold'>$ 50.00</span>
            </div>
            <div className='flex justify-around bg-[#F3F3F3] border py-1.5 mt-2'>
                <BaseButton className='px-3 py-1 text-xs bg-blue-950 rounded-full font-semibold text-white ' title='ADD TO CART'  />
                <BaseButton className='px-3 py-1 text-xs font-semibold bg-gray-1200 text-white rounded-full ' title="VIEW" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default BaseCard
