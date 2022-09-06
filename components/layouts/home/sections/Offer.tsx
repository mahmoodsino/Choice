import Image from 'next/image'
import React from 'react'
import bag from "../../../../public/assets/images/bag.png"

const Offer = () => {
  return (
    <div style={{
        background:
          "linear-gradient(180deg, #FFC700 0%, rgba(255, 199, 0, 0.48) 67.55%, rgba(255, 199, 0, 0.17) 100%)",
      }} className="w-[90%] mt-14 py-5">
        <div className="text-center">
          <span className="text-3xl text-red-950 font-semibold">SAVE UP TO </span>
          <span className="text-4xl font-bold">25%</span>
          <span className="text-[22px] text-gray-950 font-medium block mt-4">ON SELECTED ITEMS</span>
        </div>
        <Image src={bag} alt="" />
</div>
  )
}

export default Offer
