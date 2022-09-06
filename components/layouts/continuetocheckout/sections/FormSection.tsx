import Link from 'next/link'
import React from 'react'
import { BaseButton } from '../../../buttons'
import { BaseInput } from '../../../inputs'

const FormSection = () => {
  return (
    <div>
      <form>
        <div className="text-left">
          <label htmlFor="Email" className="text-sm font-medium  py-2">
            Email
          </label>
          <BaseInput id="Email" type="email" />
        </div>
        <div className="text-left mt-5">
          <label htmlFor="Password" className="text-sm font-medium  py-2">
            Password
          </label>
          <BaseInput id="Password" type="password" />
        </div>
        <div className="flex justify-between mt-3 items-center ">
        <Link href="/resetpassword">
          <a className='text-xs font-medium text-gray-1500'>Forgot your password?</a>
          </Link>
          <BaseButton className='font-medium bg-yellow-950 px-6 py-2 ' title='Checkout' />

        </div>
        </form>
    </div>
  )
}

export default FormSection
