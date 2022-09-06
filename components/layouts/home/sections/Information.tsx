import Link from 'next/link'
import React from 'react'

const Information = () => {
  return (
    <div className='border  mt-14 w-[90%]'>
      <span className="font-bold block m-0.5 px-2 py-2 bg-gray-1100">
      INFORMATION
      </span>
      <div className='px-2 space-y-2'>

      <Link  href="/" >
        <a className='uppercase block text-gray-1200 text-sm font-medium' >

        Home
        </a>
      </Link>
      <Link  href="/products" >
        <a className='uppercase block text-gray-1200 text-sm font-medium' >

      PRODUCTS
        </a>
      </Link>
      <Link  href="/aboutus" >
        <a className='uppercase block text-gray-1200 text-sm font-medium' >

      ABOUT US
        </a>
      </Link>
      <Link  href="/contactus" >
        <a className='uppercase block text-gray-1200 text-sm font-medium' >

      CONTACT US
        </a>
      </Link>
      </div>
    </div>
  )
}

export default Information
