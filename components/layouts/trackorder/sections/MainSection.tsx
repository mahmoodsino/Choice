import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { getOrders, TokenAtom, TrackOrderAtom } from '../../../../helper'
import { Spinner } from '../../../spinner'
import Orders from './Order'

const MainSection = () => {
  const [ordersState, setOrdersState] = useRecoilState(TrackOrderAtom)
  const [loading,setLoading]=useState(false)
  const [token,setToken]=useRecoilState(TokenAtom)

  useEffect(() => {
    const getData= async ()=>{
      setLoading(true)
      const res = await getOrders(token)
      if(res===null){
        toast.error("some thing went wrong")
      }else{
        setOrdersState(res.result)
      }
      setLoading(false)
    }
    getData()
  },[])

  return (
    <div className='lg:px-[75px] md:px-[35px] sm:px-[10px] 2xl:container m-auto py-10 '>
        <div className='flex justify-between  mb-10'>
            <span className='font-medium block whitespace-normal '>Track Order</span>
            <div className='border h-0 mt-3.5 border-yellow-950 lg:block sm:hidden w-[90%]'>
            </div>
        </div>
      <div className="">
        <div className=" left-0 right-0 m-auto sm:w-[100%] md:w-[80%] lg:w-[60%]   sm:px-2 md:px-5 text-gray-1050 bg-gray-1350">
          <span className="font-bold text-xl block pt-5 pb-5 text-[#262626]  ">My Orders</span>
          {!loading ? 
        <div>
          <Orders/>

        </div>  :
        <div>
          <Spinner  className='w-56'/>
        </div>
        }
        </div>
      </div>
    </div>
  )
}

export default MainSection
