import React from 'react'
import { BaseButton } from '../buttons'
import { v4 } from 'uuid' 
import { useRecoilState } from 'recoil'
import { HomePageAtom } from '../../helper'
import HomeTree from '../layouts/home/sections/HomeTree'

const FixedCategories = () => {
  const [homePageState,setHomePageState]=useRecoilState(HomePageAtom)
  return (
    <div className='border w-[250px]'>
      <HomeTree data={homePageState.featured_categories} />
    </div>
  )
}

export default FixedCategories
