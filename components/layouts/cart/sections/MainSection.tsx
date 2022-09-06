import React from 'react'
import CartItemTable from './CartItemTable'
import CartSummary from './CartSummary'

const MainSection = () => {
  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
        <span className='text-2xl font-bold block '>Shpping Cart</span>
      <CartItemTable />
      <CartSummary />
    </div>
  )
}

export default MainSection
