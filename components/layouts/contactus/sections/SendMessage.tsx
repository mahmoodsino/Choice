import React from 'react'
import BaseButton from '../../../buttons/BaseButton'
import BaseInput from '../../../inputs/BaseInput'

const SendMessage = () => {
  return (
    <div className='bg-gray-1450'>
      <div className='px-5 py-5'>
        <span className='block text-lg font-bold '>Send Message</span>
        <span>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </span>
      </div>
      <div>
        <form>
            <div className='grid grid-cols-2 px-5 py-5 gap-4'>
                <BaseInput placeholder='Full Name ' className=' px-3 py-2 w-full border' />
                <BaseInput placeholder='Email Address ' className=' px-3 py-2 w-full border' />
            </div>
            <div className='grid grid-cols-2 px-5 pb-5 gap-4'>
                <BaseInput placeholder='Company Name' className=' px-3 py-2 w-full border' />
                <BaseInput placeholder='Subject ' className=' px-3 py-2 w-full border' />
            </div>
            <div className='px-5'>
                <textarea placeholder='Message' className='w-full resize-none h-20 px-5 py-3 border' />
            </div>
            <BaseButton className='px-4 py-1 bg-yellow-950 mx-5 my-5 text-white text-lg font-bold' title='Send Message' />
        </form>
      </div>
    </div>
  )
}

export default SendMessage
