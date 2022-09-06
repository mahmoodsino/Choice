import React from 'react'

const PaymentInfo = () => {
  return (
    <div className=' bg-gray-1350 border border-[#C4C4C4]/50 pl-7 pb-8 mb-10'>
        <h1 className="font-bold text-xl pt-5 pb-5  text-gray-1500 ">Payment Info</h1>
        <div className="space-y-2 text-sm">
              <div className=" md:space-x-20 flex sm:flex-col md:flex-row ">
                <h1 className="text-gray-1550 md:w-[20%]  font-medium inline-block">
                Credit Card:
                </h1>
                <h1 className="inline-block  font-medium text-gray-1500">
                **** **** **** 1234
                </h1>
              </div>
              <div className=" md:space-x-20  flex sm:flex-col md:flex-row">
                <h1 className="text-gray-1550 md:w-[20%] font-medium inline-block">
                Cardholder Name:
                </h1>
                <h1 className="inline-block font-medium text-gray-1500">
                John Doe
                </h1>
              </div>
              
            </div>
    </div>
  )
}

export default PaymentInfo
