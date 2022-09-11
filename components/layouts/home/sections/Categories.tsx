import React from 'react'
import { BurgerIcon } from '../../../icons'
import { useRecoilState } from 'recoil'
import { HomePageAtom } from '../../../../helper'
import HomeTree from './HomeTree'

const Categories = () => {
  const [homePageState,setHomePageState]=useRecoilState(HomePageAtom)

  return (
    <div  className='border  mt-10 w-[90%]'>
      <div className=" lg:block sm:hidden">
        <div className="  h-fit  ">
          <div className="bg-yellow-950 flex   justify-between m-0.5 px-2 py-2">
          <span className='font-bold'>CATEGORIES</span>
          <BurgerIcon className='text-black w-6' />
          </div>
            <div className="relative">
              <div className="h-[350px] overflow-y-scroll overflow-x-hidden ">
                    <HomeTree data={homePageState.featured_categories} />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
