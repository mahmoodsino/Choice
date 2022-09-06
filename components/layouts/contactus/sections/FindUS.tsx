import Image from 'next/image'
import React from 'react'
import  map from "../../../../public/assets/images/map.png"

const FindUS = () => {
  return (
    <div className='bg-[#FAF9F9] text-center px-0 py-5'>
        <span className='text-xl font-bold block pb-3'>Find Us on Google Maps</span>
        <span className='text-sm pb-10 text-gray-1300 block'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </span>
        <Image src={map}/>
    </div>
  )
}

export default FindUS
