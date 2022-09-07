import React from 'react'
import { BaseCard } from '../../../card'
import { Latest, Offer } from '../../home'
import ProductCategory from './ProductCategory'
import ProductSelect from './ProductSelect'

const MainSection = () => {
  return (
    <div className='2xl:container m-auto px-[75px] pb-10'>
        <div className='flex justify-between  mt-10'>
            <span className='font-medium block '>Products</span>
            <div className='border h-0 mt-3.5 border-yellow-950 w-[93%]'>
            </div>
        </div>
        <div className='grid grid-cols-4 '>
            <div className='col-span-1 mt-10'>
                <ProductCategory />
                <Latest />
                <Offer />
            </div>
            <div className='col-span-3 mt-5 '>
                <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold'>124 Results</span>
                    <ProductSelect />
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-4'>
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                    <BaseCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection
