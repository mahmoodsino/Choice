import React from 'react'

const ShipmentSummary = () => {
  return (
    <div className='bg-gray-1350 border border-[#C4C4C4]/50 px-7'>
        <h1 className="font-bold text-xl pt-5 pb-5  text-gray-1500 ">Shipment Summary</h1>
        <div className='flex sm:flex-col md:flex-row justify-between md:text-lg font-medium border-b pb-5'>
            <span>Subtotal :</span>
            <span>$ 138.59</span>
        </div>
        <div className='flex sm:flex-col md:flex-row justify-between md:text-lg font-semibold py-5'>
            <span>Shipment Total ( Inc. Tax ) :</span>
            <span>$ 138.59</span>

        </div>
    </div>
  )
}

export default ShipmentSummary
