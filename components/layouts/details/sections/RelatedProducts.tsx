import React from 'react'
import { BaseCard } from '../../../card'

const RelatedProducts = () => {
  return (
    <div className='text-center mt-14'>
      <span className='text-4xl font-semibold'>RELATED PRODUCTS</span>
      <div className='flex justify-center mt-10 space-x-3'>
        <BaseCard/>
        <BaseCard/>
        <BaseCard/>
        <BaseCard/>
        <BaseCard/>
      </div>
    </div>
  )
}

export default RelatedProducts
