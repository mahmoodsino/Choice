import React from 'react'

const ShippingAddress = () => {
  return (
    <div className=' bg-gray-1350 border border-[#C4C4C4]/50 pl-7 pb-8 mb-10'>
        <h1 className="font-bold text-xl pt-5 pb-5  text-gray-1500 ">Shipping Address</h1>
        <div className='text-sm font-medium text-gray-1500 space-y-2'>
            <h1>Address text here</h1>
            <h1>City, house building no</h1>
            <h1>Zip / Postal Code</h1>
        </div>
    </div>
  )
}

export default ShippingAddress
