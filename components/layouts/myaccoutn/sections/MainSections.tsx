import React from 'react'
import FormSection from './FormSection'

const MainSections = () => {
  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
       <div className='flex justify-between  mb-10'>
            <span className='font-medium block '>My Account</span>
            <div className='border h-0 mt-3.5 border-yellow-950 w-[85%]'>
            </div>
        </div>
        <div className='w-[38%] m-auto text-center'>
            <span className='text-[32px] font-bold tracking-[0.08em]'>Personal Details</span>
            <FormSection />
        </div>
    </div>
  )
}

export default MainSections
