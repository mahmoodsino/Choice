import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {  useRecoilValue, useSetRecoilState } from 'recoil'
import { getUserInfo, TokenAtom, UserInfoAtom } from '../../../../helper'
import { Spinner } from '../../../spinner'
import FormSection from './FormSection'

const MainSections = () => {
const token=useRecoilValue(TokenAtom)
const setUserInfo=useSetRecoilState(UserInfoAtom)
const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getData = async () =>{
      setLoading(true)
      const res = await getUserInfo(token)
      console.log(res);
      
      if(res===null){
        toast.error("some thing went wrong")
      }else{
        setUserInfo(res.data)
        setLoading(false)
      }
    }
    getData()
  },[])

  return (
    <div className='px-[75px] 2xl:container m-auto py-10'>
      {!loading ? 
       <div>
          <div className='flex justify-between  mb-10'>
                <span className='font-medium block '>My Account</span>
                <div className='border h-0 mt-3.5 border-yellow-950 w-[85%]'>
                </div>
            </div>
            <div className='w-[38%] m-auto text-center'>
                <span className='text-[32px] font-bold tracking-[0.08em]'>Personal Details</span>
                <FormSection />
            </div>
       </div> : 
       <div className='flex justify-center'>
          <Spinner  className='w-72'/>
       </div>
    }
    </div>
  )
}

export default MainSections
