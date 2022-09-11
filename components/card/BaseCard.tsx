import Image from 'next/image'
import React from 'react'
import BaseButton from '../buttons/BaseButton'
import no_image from "../../public/assets/images/no_image.jpg"
import { useRouter } from 'next/router'

interface Props {
  img ?: string,
  name?:string,
  description?:string,
  price?:number
  id?:number
}



const BaseCard = ({img,name,description,price,id}:Props) => {

  const {push} =useRouter()

  const handelMoveToDetails = async (id:number) => {
    push({
      pathname: '/details',
      query: { product: encodeURI(`${id}`) },
  });
  }


  return (
    <div className=' w-[250px] h-fit  border ml-3 mt-2'>

        <div className='   '>
        <div>
          <div className='m-auto w-fit py-2 product-slider-img h-[190px] pt-8  bg-contain'>
            {img? 
            <img src={img} className="bg-cover w-40 h-32 border"   alt="" /> :
            <Image width={110} height={121} src={no_image} />
          }
          </div>
            <div className='mx-2'>
                <span className='block font-bold line-clamp'>{name ? name : "LubriMatic"}</span>
                <span className='block font-medium line-clamp'>{description ? description : "White Lithium Grease"} </span>
                <span className='text-gray-1050 text-lg font-semibold'>$ {price ? price : "50.00"}</span>
            </div>
            <div className='flex w-full  justify-around bg-[#F3F3F3] border  py-2'>
                <BaseButton className='px-3 py-1 text-xs bg-blue-950 rounded-full font-semibold text-white ' title='ADD TO CART'  />
                <BaseButton onClick={() =>id && handelMoveToDetails(id)} className='px-3 py-1 text-xs font-semibold bg-gray-1200 text-white rounded-full ' title="VIEW" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default BaseCard
