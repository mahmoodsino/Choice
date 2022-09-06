import React from 'react'
import { BaseButton } from '../buttons'
const Categorie= ["Air Filter","Oil Filter","Chemicals","Motor Oil","Lubricants","Wipers","Gloves","Tools"]

const FixedCategories = () => {
  return (
    <div className='border   w-[250px]'>
      {Categorie.map(item => {
        return(
            <BaseButton className='block px-2 py-3 w-full text-xs border-b hover:bg-gray-1100  text-gray-1200'>{item}</BaseButton>
        )
      })}
    </div>
  )
}

export default FixedCategories
