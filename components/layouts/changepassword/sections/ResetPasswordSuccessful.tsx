import Link from 'next/link'
import React from 'react'
import { BaseButton } from '../../../buttons'
import { LockOpenIcon } from '../../../icons'

const ResetPasswordSuccessful = () => {
  return (
    <div className='w-[38%] m-auto'>
        <div className=' flex justify-center items-center'>

      <LockOpenIcon />
        </div>
      <div className='text-center'>
        <span className='text-xl font-bold block'>Reset Password Successful</span>
        <span className='text-sm text-gray-1500'>You've successfully reset your password, you can sign in again.</span>
        <div className='px-16'>
        <Link href="/login" >
            <a className='w-full block text-white py-2 bg-blue-950 mt-10'>Back to sign in</a>
        </Link>

        </div>
      </div>
    </div>
  )
}

export default ResetPasswordSuccessful
