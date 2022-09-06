import React from 'react'
import { BaseButton } from '../../../buttons'
import { BaseInput } from '../../../inputs'

const MainSection = () => {
  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
        <div className='flex justify-between  mb-10'>
            <span className='font-medium block '>Forgot password</span>
            <div className='border h-0 mt-3.5 border-yellow-950 w-[85%]'>
            </div>
        </div>

      <div className='w-[38%] m-auto text-center space-y-3'>
            <span className='text-xl tracking-[0.08em] font-semibold block'>Reset your password</span>
            <span className='font-semibold text-gray-1500 block'>Fill in your email and well send you a link to reset your password.</span>
            <span className='text-gray-1550'>Dont forget to check your spam folder.</span>
      </div>
      <form className='w-[38%] m-auto mt-5'>
        <label className='text-left px-3 text-sm font-medium text-gray-1500' htmlFor='Email'>Email</label>
        <BaseInput id="Email" type='email' placeholder='Email Address'/>
        <BaseButton className='w-full text-white py-2 bg-blue-950 mt-10' title='Request password reset'/>
      </form>
    </div>
  )
}

export default MainSection
