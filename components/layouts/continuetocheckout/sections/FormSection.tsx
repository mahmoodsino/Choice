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
          <BaseButton
            className="px-7 py-1.5  bg-yellow-950 rounded-full"
            title="Checkout"
          />

        </div>
        </form>
    </div>
  )
}

export default FormSection
