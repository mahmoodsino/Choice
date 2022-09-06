import React from 'react'
import { BurgerIcon } from '../../../icons'
import { v4 } from 'uuid'

const Categorie= ["Air Filter","Oil Filter","Chemicals","Motor Oil","Lubricants","Wipers","Gloves","Tools"]

const Categories = () => {
  return (
    <div  className='border  mt-10 w-[90%]'>
      <div className='bg-yellow-950 flex   justify-between m-0.5 px-2 py-2'>
        <span className='font-bold'>CATEGORIES</span>
        <BurgerIcon className='text-black w-6' />
      </div>
      {Categorie.map(item => {
        return(
            <span key={v4()} className='block px-2 py-3 text-xs border-b text-gray-1200'>{item}</span>
        )
      })}
    </div>
  )
}

export default Categories
