import React from 'react'
import { BaseCard } from '../../../card'

const RelatedProducts = () => {
  return (
    <div className='  mt-14'>
      <span className='text-4xl block  text-center font-semibold'>RELATED PRODUCTS</span>
      <div className='sm:grid md:grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-center mt-10 space-x-3'>
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
