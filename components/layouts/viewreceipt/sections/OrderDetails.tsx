import React from 'react'

const OrderDetails = () => {
  return (
    <div className=' bg-gray-1350 border border-[#C4C4C4]/50 pl-7 mb-10'>
        <h1 className="font-bold text-xl pt-5 pb-5  text-gray-1500 ">Order Details</h1>
        <div className='flex flex-row'>
            <div className='flex flex-col w-[43%] space-y-2 mb-5 text-sm font-medium'>
                <div className='w-[100%] flex md:flex-row sm:flex-col '>
                    <h1 className='w-[60%] text-gray-1550 inline-block'>Order ID:</h1>
                    <span className='text-gray-1500'>#12345</span>
                </div>
                <div className='w-[100%] flex md:flex-row sm:flex-col '>
                    <h1 className='w-[60%] text-gray-1550 inline-block'>Order Date:</h1>
                    <span className='text-gray-1500'>12/02/2022</span>
                </div>
                <div className='w-[100%]  flex md:flex-row sm:flex-col'>
                    <h1 className='w-[60%] text-gray-1550 inline-block'>Payment Method:</h1>
                    <span className='text-gray-1500'>Credit Card</span>
                </div>
                <div className='w-[100%]  flex md:flex-row sm:flex-col'>
                    <h1 className='w-[60%] text-gray-1550 inline-block'>Delivery Method:</h1>
                    <span className='text-gray-1500'>Delivery</span>
                </div>
            </div>
            <div className='w-[60%] space-y-2 text-sm font-medium'>
                <div className='md:ml-10 flex md:flex-row sm:flex-col'>
                    <h1 className='w-[30%] text-gray-1550 inline-block'>Fullname:</h1>
                    <span className='text-gray-1500'>John Doe</span>
                </div>
                <div className='md:ml-10 flex md:flex-row sm:flex-col'>
                    <h1 className='w-[30%] text-gray-1550  inline-block'>Email:</h1>
                    <span className='text-gray-1500'>johndoe@hotmail.com</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default OrderDetails
