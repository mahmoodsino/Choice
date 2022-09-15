import React from 'react'
import Orders from './Order'

const MainSection = () => {
  return (
    <div className='lg:px-[75px] md:px-[35px] sm:px-[10px] 2xl:container m-auto py-10 '>
        <div className='flex justify-between  mb-10'>
            <span className='font-medium block whitespace-normal '>Track Order</span>
            <div className='border h-0 mt-3.5 border-yellow-950 lg:block sm:hidden w-[90%]'>
            </div>
        </div>
      <div className="">
        <div className=" left-0 right-0 m-auto sm:w-[100%] md:w-[80%] lg:w-[60%]   sm:px-2 md:px-5 text-gray-1050 bg-gray-1350">
          <h1 className="font-bold text-xl pt-5 pb-5 text-[#262626]  ">My Orders</h1>
          <Orders/>
        </div>
      </div>
    </div>
  )
}

export default MainSection
