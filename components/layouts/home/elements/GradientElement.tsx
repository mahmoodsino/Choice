import { useRouter } from 'next/router';
import React from 'react'
import { BaseButton } from '../../../buttons';

type props = {
    image: string,
    id:number
  };

const GradientElement = ({image,id}:props) => {
  const {push}=useRouter()

  const handelBrand = () => {
    push({
      pathname:"/products",
      query:{brand:id}
    })
  }

  return (
    <BaseButton onClick={() => handelBrand()} className=' '>
        <div className='pr-4'>
                <div style={{
                    background:
                    "linear-gradient(90deg, rgba(255,199,0,1) 6%, rgba(196,196,192,1) 55%)",
                }} className='rounded-full flex items-center w-40 h-40 '>
                    
                    <div className='w-32 h-32   bg-white rounded-full m-auto  flex items-center '>
                        <img className='rounded-full' src={image} alt="" />
                    </div>
                </div>

        </div>
    </BaseButton>
  )
}

export default GradientElement
