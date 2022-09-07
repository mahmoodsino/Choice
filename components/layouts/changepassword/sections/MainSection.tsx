import React from 'react'
import { BaseButton } from '../../../buttons'
import { BaseInput } from '../../../inputs'
import ResetPasswordSuccessful from './ResetPasswordSuccessful'

const MainSection = () => {
  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
      <div className='flex justify-between  mb-10'>
            <span className='font-medium block '>Change password</span>
            <div className='border h-0 mt-3.5 border-yellow-950 w-[85%]'>
            </div>
        </div>
        <div className='w-[38%] m-auto text-center space-y-3'>
            <span className='text-xl tracking-[0.08em] font-semibold block'>Change your password</span>
            <span className='font-semibold text-gray-1500 block'>Please use a new password to sign in</span>
      </div>
      <form className='w-[38%] m-auto mt-5'>
        <div>

        <label className='text-left px-3 text-sm font-medium text-gray-1500' htmlFor='New Password'>New Password</label>
        <BaseInput id="New Password" type='password' placeholder='**************'/>
        </div>
        <div className='mt-5'>

        <label className='text-left px-3 text-sm font-medium text-gray-1500 mt-3' htmlFor='Confirm New Password'>Confirm New Password</label>
        <BaseInput id="Confirm New Password" type='password' placeholder='**************'/>
        </div>
        <div className='flex justify-end'>
          <BaseButton className='px-7 rounded-full text-white py-2 bg-blue-950 mt-5' title='Reset password'/>
        </div>
      </form>
      {/* <ResetPasswordSuccessful /> */}
    </div>
  )
}
export default MainSection